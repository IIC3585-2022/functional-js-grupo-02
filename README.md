[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7322933&assignment_repo_type=AssignmentRepo)

# Tarea 1 - Grupo 2

Tarea sobre JS funcional

## Uso

Para usar esta tarea, se debe primero instalar las dependencias:

```sh
$ npm install
```

Luego, se puede alterar el archivo `demo.js` ubicado en la raíz del repositorio para cambiar la cantidad de jugadores y sus nombres (el programa soporta cualquier cantidad de jugadores):

```sh
$ nano demo.js  # or your favorite editor
```

Finalmente, se puede correr la demo usando el siguiente comando:

```sh
$ npm run demo
```

### Formato de los lanzamientos

Cuando le toca el turno a un jugador, se le pide ingresar los valores de sus tres lanzamientos. Estos valores deben ser ingresados en un arreglo en formato JSON. Esto quiere decir que los _strings_ deben ser envueltos con comillas dobles (`"`) y **no** simples (`'`), y que los números **no deben estar envueltos en comillas**. El siguiente ejemplo es una serie de tres lanzamientos ingresado de manera válida:

```
=> Please enter this player's 3 dart shots: ["SB", [2, 20], "DB"]
```

Nótese que el _input_ fue entregado **envuelto en corchetes**, cada string fue rodeado por **comillas dobles** y los números **no están rodeados por comillas**.
