# How to build this plugin?

You can build with the following steps:

```
$ git --version
git version 2.12.0

$> node -v
v9.3.0

$> git clone https://github.com/squareetlabs/ionic-navigationbar-color

$> cd ionic-navigation-bar-color

$> npm install

$> npm run build
...
Making new TMP directory
Preparing core module package.json
Building plugin: navigation-bar-color
Done processing plugins!
```

-----

# Install to your project

```
$> cd (your ionic project)

$> npm install (path to ionic-native-google-maps)/dist/\@ionic-native/core --link

$> npm install (path to ionic-native-google-maps)/dist/\ionic-navigationbar-color --link

$> ionic cordova run android
```
