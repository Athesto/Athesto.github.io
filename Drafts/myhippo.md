# My hipposcraper
> Mi experiencia instalando hipposcrapper

Para la versión en inglés [en]

# Disclaimer
Esta es mi experiencia y no me hago responsable de ningún mal funcionamiento en el pc

# Prefacio
Hipposcrapper es un script son dos scripts creados por @kdg

# Introducción
Este no es sólo un tutorial donde escribo los pasos para instalar el hipposcraper. En cambio, es mi bitácora. Eso significa que voy a explicar paso a paso lo que hice durante el proceso y dónde encontré errores en los archivos. Cómo hice para identificarlos. Estaré citando herramientas o foros donde explican algunos conceptos que me ayudaron para eso. Esta es mi forma de aprender y aquí de las comparto.

# Prerrequisitos
Para normalizar la instalación lo haré en el box de `vagrant` `ubuntu/trusty64`

# El plan
 * [ ] instalar vagrant
 * [ ] Dependencias
   * [ ] `pip`
   * [ ] `makenize`
   * [ ] `Bautifulsoup4`
 * [ ] Instalación hipposcraper
 * [ ] Los aliases
 * [ ] usar

Comencemos

## Instalar `vagrant`
En mi caso instalaré primero virtualbox
Para Linux
```bash
sudo apt-get install virtualbox
```

Ahora vagrant
```bash
sudo apt-get install vagrant
```

Cómo uso varios programas me gusta mantenerlo separado en una carpeta diferente cada instalación 
```bash
Tavo[~]$ mkdir -p vagrant/trusty64
Tavo[~]$ cd vagrant/trusty64
Tavo[trusty64]$ vagrant init ubuntu/trusty64
Tavo[trusty64]$ vagrant up
Tavo[trusty64]$ vagrant ssh
```
Y con esto ya estamos ya estamos en una versión limpia y funcional de ubuntu. libre de todas nuestras instalaciones raras. Les recomiendo esta página donde estan los boxs para que jueguen

## Dependencias
Ya estamos en nuestro vagrant
Ahora hay que revisar el manual de instalación
[imagen del shell]
```bash
python --version
sudo apt-get install pip
```
Cómo no funciona, hay que instalar de otras formas
```bash
curl 
./get-
```
Cómo se instalo como un módulo de Python y no como binario. De ahora en adelante se tiene que usar `python -m pip` en vez de `pip`. Y por lo que citan en [What's the difference between "pip install" and "python -m pip install"?][sta-pip] no hay diferencia en su funcionamiento

En la instalaciones de los paquetes no encontré diferencias
```bash
python -m pip install --user
python -m pip install --user
```

Ahora para rectificar si está instalado hago un listado de los modulos
```bash
python -m pip list
```
torios me gusta tenerlos dentro de una carpeta `github.com/[USUARIO]` donde`[USUARIO]` es su creador del

Creamos la carpeta
```bash
mkdir -p github.com/kai-dg
cd github.com/kai-dg
git clone https://
cd hipposcraper
```
## Instalación del hipposcraper
Ejecutamos el instalador
```bash
./setup
```
Este nos pedirá usuario clave

Al crearlo todo salió perfecto
Recomiendo copiar
Este comando crea un alias dentro del basrch

Si usan zsh deberían copiar esos aliases en el archivo correspondiente

Se edita el archivo de ejecución con el nombre del directorio donde estan los scripts

Se reincia el bashrc

Se dirigen a la carpeta dónde está el repositorio del proyecto

Ejecutan el programa

Cómo no funciona

Ejecutar bash +x que es el debug de bash [2.3 Debugging Bash scripts][bash-debug]

Editan el alias

Este error es porque el alias que está asociado al script viene con el comando python antes por lo que la sintaxis

Entonces lo ejecutamos con ssh

# Problemas que encontré 
No se puede encontrar el pip

el tutorial dice instala estos paquetes y después dice pero con esta flag. 

Hay que recordar que las observaciones se tienen que dar antes de mostrar la ejecución [meme de acción y después ... Pero]

La clave la muestra como texto plano

Si encuentran otra solución me gustaría leerlo en los comentarios


# Analizando el repositorio

# Notas
Los gifs los cree con esta página
Esta página graba el escritorio

# Sobre el Mi

# Agradecimiento

# Invitación
Este es mi primer post personal y espero que no sea el único y
Si gustan, pueden entrar en mi página 
Para ver si en algún momento creo algo
Que les pueda servir

<!-- Bibliografía -->
[sta-pip]:https://stackoverflow.com/questions/25749621/whats-the-difference-between-pip-install-and-python-m-pip-install

[bash-debug]:https://tldp.org/LDP/Bash-Beginners-Guide/html/sect_02_03.html
