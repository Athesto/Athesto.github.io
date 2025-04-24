---
slug: el-which-que-necesita-powershell
authors: [gustavo]
tags: [powershell, psmodule, draft, todo, get-commandAliases, gca, scripts]
image: https://github.com/user-attachments/assets/f9642eeb-4adb-4502-bd5d-b0ac8722244c
---
# El `which` Que Necesita Powershell

<!--
   -### TODO
   -- [x] Montar su repositorio
   -- [ ] Montar el módulo en https://www.powershellgallery.com
   -- [ ] Revisión de Chatgpt
   -- [x] Incluir imégenes
   -- [x] Revisar ortografía
   -- [ ] Revisar la codificación. Parece que esta en uft-16
   -- [x] corregir sección de instalación
 -->

![Banner-which](https://github.com/user-attachments/assets/f9642eeb-4adb-4502-bd5d-b0ac8722244c)

### 🧩 El Problema
Una de las cosas más frustrantes cuando empecé a usar powershell es ¿Qué
comando estoy ejecutando aquí?  Yo vengo del terminal de linux y realmente me
pareció increíble que powershell tuviera los comandos como `ls` o `curl`, y
pensé "ok, esto es como linux" y estaba feliz porque podía trabajar igual.  Y
fue así hasta un día que necesitaba saber si existía una variable de entorno.
Un sencillo `env` para saber si existía, Y de repente descubrí que el comando
que necesitaba es `ls env:`

...Espera un momento, ¿Por qué se necesita el comando `ls` para las variables
de entorno? ¿Por qué tengo que colocar el `:`? ¿Las variables de entorno son
una carpeta. Algo así como si estuviéramos hablando de un disco `C://`?.

Otro problema que encontré fue cuando estaba revisando cómo ejecutar powershell
como admin y cada foro lo ejecutaba como quisiera.
```powershell
  # Todos estos comandos hacen lo mismo

  start powershell -verb runas
  start-process powershell -verb runas
  StArT-PrOcEsS pwsh.exe -VeRb runas
  saps pwsh -verb runas
```

entonces ¿Qué está pasando aquí?. Ahí fue cuando descubrí que powershell es
**CASE INSENSITIVE** ¿A quien se le ocurre usar palabras reservadas con case
insensitive? Bueno, nada que hacer, eso es lo que hay.

Omitiendo eso me pareció curioso que usen un estandar de `<verb>-<command>`
esto me pareció una genialidad. Que puedas saber exactamente qué comando estas
usando, si leer/escribir/borrar/llamar etc. Pero bueno esto no es tan divertido
cuando estas hablando de comandos del día a día, ¿Te imaginas estar trabajando y
te toca usar `get-content` todo el día?.  Eso explica por qué la necesidad de
usar aliases

Pero entonces quieres usar `curl`, pero descubriste que también existe el
`wget`.  Y te preguntas ¿Qué otro comando existe para `Invoke-WebRequest`?
Tocará buscar un `which`. Aquí es donde entra el comando `get-command`. Puedes
mandarle cualquier entrada: una función, un comando, o un alias

```
  Get-Command <your-command-alias-function>
```

y te da la ubicación, que tipo es y el nombre de tu comando. Si le pasas un alias
este te retorna el nombre del comando al que apunta.

Pero si lo que quieres es saber si existen más aliases asociados. Para eso
existe el `get-aliases`. Aunque para este comando tienes que saber que le estas
mandando. Si le mandas un `comando` debes usar

```
  Get-Alias -Definition <your-command>
````

Pero si es un `Alias` debes usar

```
  Get-Alias -Definition (get-alias <your-alias>).Definition
```

de otra forma arroja error

Y pues quiero saber cuales son todos los alias asociados a un comando. ¿A caso es
mucho pedir querer eso en un comando sencillo de which?

### 😎 Solución (Get-CommandAliases)

Aquí es donde entra esta solución. El comando `Get-CommandAliases` te retorna
la información de lo que necesites en un sencillo empaquetamiento.

```shell
PS C:\> get-commandAliases ls

CommandType Name          Aliases    Source
----------- ----          -------    ------
     Cmdlet Get-ChildItem dir,gci,ls Microsoft.PowerShell.Management

PS C:\> get-commandAliases get-childItem

CommandType Name          Aliases    Source
----------- ----          -------    ------
     Cmdlet Get-ChildItem dir,gci,ls Microsoft.PowerShell.Management

PS C:\> which start

CommandType Name          Aliases    Source
----------- ----          -------    ------
     Cmdlet Start-Process saps,start Microsoft.PowerShell.Management

```

Es una combinación del `get-command` pero incluyendo la salida del
`get-aliases -Definition`. De esa forma se puede averiguar cuales son los aliases
asociados a un comando y puede recibir cualquier entrada

### 📦 Como instalarlo

Cambia al directorio de módulos y clona el repositorio

```powershell
cd ($env:PSModulePath -split ';')[0]
git clone 'https://github.com/athesto/Get-CommandAliases'
help get-CommandAliases
which iwr
```

### 🏆 Conclusión
- Ya no tienes que pensar si lo que estás ejecutando es un `Cmdlet` o un `Alias`.

- Todo se simplifica a `which <nombre>`.

- Piensa en esto como `Get-Command`, pero con columna de aliases incluida.

<!-- truncate -->

