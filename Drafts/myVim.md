# Mi experiencia con Vim y Holberton School [Borrador]

## Mi primera edición

Mi primer consejo para comenzar Vim es realizar el tutorial

```bash
vimtutor
```

Si no te sientes tan cómodo con el inglés puedes intentar la versión traducida

```bash
vimtutor es
```



## Actualiza a la última versión

Holberton usa la versión de Ubuntu 14.04, y para esa época la última versión de vim es la ~~7.4~~. Esto lo podemos ver con el siguiente comando
```bash
[~]$ vim --Version | head -1
VIM - Vi IMproved 8.0 (2016 Sep 12, compiled Apr 10 2018 21:31:58)
```
es entendible que para el desarrollo de las actividades se utilize la versión de Ubuntu de esa época pero para el editor esa lógica no aplica por lo que mi recomendación es instalar la última versión del editor. Para esto se necesita actualizar la lista de programas del gestor de paquetes de `APT`.

Para actualizar los paquetes sería así

```bash
[~]$ sudo apt update
...
All packages are up to date.
[~]$ sudo apt list vim
vim/bionic,now 2:8.0.1453-1ubuntu1 arm64 [installed]
```
Pero aquí nos encontramos con un problema. El gestor de paquetes no encuentra la última versión de vim. Pero no es culpa del él ya que al sacar nuevas versiones del sistema operativo se dejan atrás soportes a versiones viejas y recomiendan cambiar a la siguiente. Cosa que no podemos hacer. Así que tenemos que buscar otra forma de instalarlo. Por suerte para eso existen los PPA

## el mágico mundo de los archivos de paquetes personales

Los archivos de paquetes personales o PPA por sus siglas en inglés (Personal package Archive) son repositorios creados por la comunidad que se pueden integrar al gestor de paquetes `apt`

Dicho de una forma simple 
> los PPA son repositorios que te permiten instalar programas adicionales a través de tu gestor de paquetes apt

### Importa o remueve un PPA

Esta es la sintaxis para importar o remover repositorios personales

```bash
sudo add-apt-repository [--remove] ppa:<user>/<repo>
```

Donde:
- `<user>` es el usuario
- `<repo>` es el repositorio
- `--remove` se incluye si se quiere quitar un repositorio

### PPA:vim
El siguiente paso sería importar un repositorio que tenga la última versión de vim y este sería el del usuario [Jonathonf][Jonathonf/vim]
```bash
[~]$ sudo apt list vim
vim/bionic,now 2:8.0.1453-1ubuntu1
[~]$ sudo add-apt-repository 
...
[~]$ sudo apt list vim
vim/bionic,now 2:8.0.1453-1ubuntu1
[~]$ sudo apt update
...
All packages are up to date.
[~]$ sudo apt list vim
vim/bionic,now 2:8.0.1453-1ubuntu1
```

### hello
http://ubuntuhandbook.org/index.php/2019/12/install-vim-8-2-ubuntu-18-04-16-04-19-10/

<!--bibliografia-->
[Jonathonf/vim]: https://launchpad.net/~jonathonf/+archive/ubuntu/vim
