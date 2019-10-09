# OS Portable 

## ¿Por qué?
Debido a mi situación de que viajo mucho con un computador que no es mio, tengo la necesidad de reducir a lo máximo mis objetos personales, entre estos, esta mi PC, por lo la solución propuesta fue crear un pc dentro de una usb, donde pueda trabajar con tranquilidad pero todo cambio que se realice sea dentro de la USB

Ahora para instalar el sistema operativo, por capricho elijo linux.

Uso rufus para crear el **Live USB** en una SD

Ahora uso una USB de 3.0 Kingstone de 32GB como destino donde instalar el OS

El PC de donde estoy haciendo estas configuraciones es un win10 con GPT por lo que debo configurar la USB como GPT

[Diferencias GPT vs MBR][2]

En resumen, el GPT es el futuro.

Se reinicia el pc como UEFI
```
configuracion > restaurar > opciones avanzadas > iniciar UEFI framework
 
```
sudo parted -l
```
Aquí se sabe el nombre del disco ex: `sdc`

Ahora se va a crear la partición con el programa `gdisk`

```
sudo gdisk /dev/sdx
```

## Distribución de los espacios
[DiskSpace][1]

|Name  |Size  	|
|------|-------:|
|/boot |500M	|
|swap  |RAM size|
|/     |10G	|
|/home |extra	|

[1]: https://help.ubuntu.com/community/DiskSpace
[2]: https://www.howtogeek.com/193669/whats-the-difference-between-gpt-and-mbr-when-partitioning-a-drive/
