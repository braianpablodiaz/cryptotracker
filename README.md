# React Native App template

Este proyecto fue desarrollado con el objetivo de agilizar el startup mediante el uso de tecnologías y patrones de diseño elegidos por su compatibilidad, estabilidad y rendimiento.

## Primeros pasos

1. Instalación
2. Primeros cambios
3. Estructura del proyecto
4. Variables de entorno
5. Uso
6. Test

## 1. Instalación

Para este template se utilizo React Native Cli

Instalar Nodejs 12 o superior desde : 

[Nodejs](https://nodejs.org/es/)
o 
[nvm](https://github.com/nvm-sh/nvm)

Instalar Java Development Kit desde :

[OpenJDK](http://openjdk.java.net/)
o
[Java Oracle](https://www.oracle.com/java/technologies/javase-downloads.html)

Insatalar Android Studio y Sdk desde : 

[Android Studio](https://developer.android.com/studio/index.html)

Exportar ANDROID_HOME

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Instalar React Developer Tools Debug

```bash
npm install -g react-devtools
```


### 2. Primeros cambios

Es necesario cambiar el nombre de la carpeta principal por el nombre que llevará el proyecto y editar el archivo `package.json` con los nuevos detalles, en particular:

```javascript
  "name": "demo",
  "version": "0.0.1",
  "description": "Project example with good practices.",
  "keywords": [
    "example"
  ],
  ```

Además deberemos modificar el archivo `app.json` por el nombre que llevará nuestra App

```javascript
  "name": "demo",
  "displayName": "demo"
  ```

### 3. Estructura del proyecto

La aplicación inicia en `index.js`, las variables de entorno se tomaran desde `env.config.js` estas mismas están configuradas por ambiente en los archivos `dev.env.js`, `test.env.js`, `prod.env.js`.


		App.tsx
		[src]
		  [actions]
		  [assets]
		  [components]
		  [config]
		    [env]
		      dev.env.js
		      test.env.js
		      prod.env.js
		    env.config.js
		  [i18n]
		  [providers]
		  [reducers]
		  [sagas]
		  [utils]

### 4. Variables de entorno

Las variables de entorno deberán ser modificadas en los archivos : `dev.env.js`, `test.env.js`, `prod.env.js` , es una forma sencilla de configuración sin tener que crear variables de entorno nativas.


### 5. Uso
Para correr en una instancia Android debemos ejecutar los siguientes comandos.
Estos ejecutaran la aplicación en un emulador de Android o en algún dispositivo
Android conectado a la pc. La primera vez puede fallar dado que el emulador se estará creando e iniciando. También tener en cuenta que si al abrir la App en el emulador lanza algún error , deberemos cerrar la app y abrirla nuevamente o recargar los recursos.

Dev

```bash
npm run dev:android:start
```

Test

```bash
npm run test:android:start
```

Prod

```bash
npm run prod:android:start

```

También se podrá ejecutar el debugger con el siguiente comando, que se iniciara por defecto cuando la app ya esta corriendo en el emulador.


```bash
react-devtools
```

### 6. Test

Los tests se pueden ejecutar mediante el comando `npm run test`. Los test deben estar dentro de la carpeta `__tests__` que se encuentra en la carpeta root del proyecto.