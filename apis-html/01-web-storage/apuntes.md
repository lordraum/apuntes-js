# Web storage

API que permite almacenar información en el cliente, incluso cuándo se reinicie la página.

## sessionStorage

Guarda datos en la sesión actual del usuario. Es decir que si se sale de la página se borran los datos

### Método setItem()

Añade dato(s) a web storage, por intermedio de key / value para recuperar los datos.

```js
sessionStorage.setItem(key, value);
```

```js
btn.addEventListener("click", (e) => {
  sessionStorage.setItem("numero", num.textContent);
  num.textContent++;
});
```

### Método getItem

Accede al valor guardado en storage por medio de la key.

```js
const numValue = sessionStorage.getItem("numero");
```

### Clear

Elimina todos los elementos almacenados en storage

### remove

Elimina el elemento deseado en la storage

## localStorage

Almacena los datos incluso cuándo se ha salido de la página. Utiliza los mismos métodos que sessionStorage.

## Trabajar con objetos

```js
const person = {
  personName: "David",
  email: "david@gmail.com",
};
localStorage.setItem("person", JSON.stringify(person));
```
