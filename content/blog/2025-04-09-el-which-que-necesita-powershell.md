---
slug: el-which-que-necesita-powershell
authors: [gustavo]
tags: [powershell, psmodule, draft, todo]
---
# El `which` Que Necesita Powershell

<!--
   -### TODO
   -- [ ] Montar el modulo en la página de athesto.github.io/scripts
   -- [ ] Montar el modulo en https://www.powershellgallery.com
   -- [ ] Revisión de Chatgpt
   -- [ ] Incluir imagenes
   -- [ ] Revisar ortografía
   -- [ ] Revisar la codificación. Parece que esta en uft-16
   -- [ ] corregir sección de instalación
 -->

### El Problema
Una de las cosas mas frustrantes cuando empecé a usar powershell es ¿Que
comando estoy ejecutando aquí?  Yo vengo del terminal de linux y realmente me
pareció increible que powershell tuviera los comandos como `ls` o `curl`, y
pensé "ok, esto es como linux" y estaba feliz porque podía trabajar igual.  Y
fue así hasta un día que necesitaba saber si existía una variable de entorno.
Un sencillo `env` para saber si existía, Y de repente descubrí que el comando
que necesitaba es `ls env:`

...Espera un momento, ¿Por qué se necesita el comando `ls` para las variables
de entorno? ¿Por qué tengo que colocar el `:`? ¿Las variables de entorno son
una carpeta. Algo así como si estuvieramos hablando de un disco `C://`?.

Otro problema que encontre fue cuando estaba revisando como ejecutar powershell
como admin y cada foro lo ejecutaba como quiziera.
```powershell
  # Todos estos comandos hacen lo mismo

  start powershell -verb runas
  start-process powershell -verb runas
  StArT-PrOcEsS pwsh.exe -VeRb runas
  saps pwsh -verb runas
```

entonces ¿Que esta pasando aquí?. Ahí fue cuando descubrí que powershell es
**CASE INSENSITIVE** ¿A quien se le ocurre usar con case insensitive palabras
reservadas? Bueno, nada que hacer, eso es lo que hay.

Omitiendo eso me pareció curioso que usen un estandar de `<verb>-<command>`
esto me pareció una genialidad. Que puedas saber exactamente que comando estas
usando, si leer/escribir/borrar/llamar etc. Pero bueno esto no es tan divertido
cuando estas hablando de comandos del día a día, ¿Te imagias estar trabajando y
te toca usar `get-content` todo el día?.  Eso explica por que la necesidad de
usar aliases

Pero entonces quieres usar `curl`, pero descubriste que también existe el
`wget`.  Y te preguntas ¿Que otro comando existe para `Invoke-WebRequest`?
Tocará buscar un `which`. Aquí es donde entra el comando `get-command`. Puedes
mandarle cualquier entrada una función, un comando, o un alias

```
  Get-Command <your-command-alias-function>
```

y te da la ubicación, que tipo es y el nombre de tu comando. Si le pasas un alias
este te retorna el nombre del comando al que apunta.

Pero si lo que quieres es saber si existen más aliases asociados. Para eso
existe el `get-aliases`. Aunque para este comando tienes que saber que le estas
mandando. Si le mandas un comando debes usar

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

### Solución (Get-CommandAliases)

Aquí es donde entra esta solución. El comando `Get-CommandAliases` te retorna la información
de lo que necesites en un sencillo empaquetamiento.

```shell
┏C:\Users\Athesto>
┗> get-commandAliases ls

CommandType Name          Aliases    Source
----------- ----          -------    ------
     Cmdlet Get-ChildItem dir,gci,ls Microsoft.PowerShell.Management

┏C:\Users\Athesto
┗> get-commandAliases get-childItem

CommandType Name          Aliases    Source
----------- ----          -------    ------
     Cmdlet Get-ChildItem dir,gci,ls Microsoft.PowerShell.Management

┏C:\Users\Athesto
┗> which start

CommandType Name          Aliases    Source
----------- ----          -------    ------
     Cmdlet Start-Process saps,start Microsoft.PowerShell.Management

```

Es una combinación del `get-command` pero incluyendo la salida del
`get-aliases -Definition`. De esa forma se puede averiguar cuales son los aliases
asociados a un comando y puede recibir cualquier entrada

### Como instalarlo
```ps1
# 1. Busca tu carpeta de modulos
echo $env:PathModule  # C:\User\<tu-usuario>\Documents\Powershell\Modules;....

# 2. crea la carpeta
mkdir -p C:\User\<tu-usuario>\Documents\Powershell\Modules;

# 3. Descarga el modulo
Invoke-WebRequest athesto.github.io/scripts/powershell/Get-CommandAliases.psm1 |
  -OutFile C:\User\<tu-usuario>\Documents\Powershell\Modules;

# 4. Reincias el terminal
exit

# 5. Prueba el comando
help get-CommandAliases
...

which iwr
...

get-CommandAliases get-CommandAliases
```

### Conclusión
- Ya no tienes que pensar en si lo que estas ejecutando es un `Cmdlet` para
  usar el
  ```
    Get-Alias -Definition <your-command>
  ````
  o un `Alias` para usar un
  ```
    Get-Alias -Definition (get-alias <your-alias>).Definition
  ```
- Todo se simplifica a un `which <your-command>`
- Se puede pensar como añadir la columna de aliases al comando `Get-Command`.

<!-- truncate -->

