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

Holberton usa la versión de Ubuntu 14.04, y para esa época la última versión
de vim es la 7.4. Esto lo podemos ver con el siguiente comando
```shell
[~]$ vim --Version | head -1
VIM - Vi IMproved 7.4 (2013 Aug 10, compiled Nov 24 2016 16:43:18)
```
es entendible que para el desarrollo de las actividades se utilize la versión
de Ubuntu de esa época pero para el editor esa lógica no aplica por lo que mi
recomendación es instalar su última versión. Para esto se necesita actualizar
la lista de programas del gestor de paquetes de `APT`.

Para actualizar los paquetes sería así

```console
[~]$ sudo apt update
...
All packages are up to date.
[~]$ sudo apt list vim
vim/trusty-updates,trusty-security,now 2:7.4.052-1ubuntu3.1 amd64 [installed]
```
Pero aquí nos encontramos con un problema. El gestor de paquetes muestra la
version 7.4.052. Pero no es culpa del él. Cuando nacen nuevas versiones del
sistema operativo se dejan atrás soportes a versiones viejas y recomiendan
cambiar a la siguiente. Cosa que no podemos hacer. Así que tenemos que buscar
otra forma de instalarlo. Por suerte para eso existen los PPA

## el mágico mundo de los archivos de paquetes personales

Los archivos de paquetes personales o PPA por sus siglas en inglés (Personal
package Archive) son repositorios creados por la comunidad que se pueden
integrar al gestor de paquetes `apt`

Dicho de una forma simple
> los PPA son repositorios que te permiten instalar programas adicionales a
través de tu gestor de paquetes apt

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
El siguiente paso sería importar un repositorio que tenga la última versión de
vim y este sería el del usuario [Jonathonf][Jonathonf/vim]
```bash
[~]$ sudo apt list vim
vim/trusty-updates,trusty-security,now 2:7.4.052-1ubuntu3.1 amd64 [installed]
[~]$ sudo add-apt-repository ppa:jonathonf/vim
...
Press [ENTER] to continue or ctrl-c to cancel adding it
...
OK
[~]$ sudo apt list vim
vim/trusty-updates,trusty-security,now 2:7.4.052-1ubuntu3.1 amd64 [installed]
[~]$ sudo apt update
...
All packages are up to date.
[~]$ sudo apt list vim
vim/trusty 2:8.2.1105-0york0~14.04 amd64 [upgradable from: 2:7.4.052-1ubuntu3.1]
[~]$ sudo apt upgrade -y
...
[~]$ vim --Version | head -1
VIM - Vi IMproved 8.2 (2019 Dec 12, compiled Jul  1 2020 12:39:37)
```
que bueno, ya tenemos una versión mucho mas reciente de vim que nos permite
trabajar con mejores plugins y mejores configuraciones


### hello
http://ubuntuhandbook.org/index.php/2019/12/install-vim-8-2-ubuntu-18-04-16-04-19-10/

<!--bibliografia-->
[Jonathonf/vim]: https://launchpad.net/~jonathonf/+archive/ubuntu/vim
