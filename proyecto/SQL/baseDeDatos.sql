CREATE SCHEMA baseDeDatos;
USE baseDeDatos;

CREATE TABLE tabla_de_usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(200) UNIQUE NOT NULL,
  usuario VARCHAR(200) UNIQUE NOT NULL,
  contraseña VARCHAR(250) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  documento INT NOT NULL,
  foto_perfil VARCHAR(300) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL
  );
    
CREATE TABLE tabla_productos (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT UNSIGNED NOT NULL,
  imagen VARCHAR(300) NOT NULL,
  nombre_producto VARCHAR(250) NOT NULL,
  descripcion_producto VARCHAR(1000) NOT NULL, 
  fecha_carga DATETIME,
  FOREIGN KEY (usuario_id) REFERENCES tabla_de_usuarios(id),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL
	);

CREATE TABLE comentarios (
	id INT UNSIGNED KEY AUTO_INCREMENT,
  post_id INT UNSIGNED NOT NULL,
  usuario_id INT UNSIGNED NOT NULL,
  comentario VARCHAR(2000) NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES tabla_de_usuarios(id),
  FOREIGN KEY (post_id) REFERENCES tabla_productos(id),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL
	);
    
INSERT INTO tabla_de_usuarios (id, email, usuario, contraseña, fecha_nacimiento, documento, foto_perfil)
VALUES (default, "juan.luanardo@gmail.com", "Juan Luanardo", "juanito1999", "1999-04-01", "35603546", "perfil1.jpg"), 
(default, "marucha55@hotmail.com", "María Fajuardi", "peperosa111", "1955-08-26", "13589334", "perfil2.jpg"), 
(default, "paolap@gmail.com", "Paola Pinpolón", "nazasanti2004", "1972-10-30", "22639741", "perfil3.jpg"),
(default, "echarri.miguel@gmail.com", "Miguel Echarri", "miguelitoboca1234", "2000-03-21", "40649802", "perfil4.jpg"),
(default, "betty.garcia@hotmail.com", "Beatriz García", "beaflores", "1960-12-25", "15790123", "perfil5.jpg");

INSERT INTO tabla_productos (id, usuario_id, imagen, nombre_producto, descripcion_producto, fecha_carga)
VALUES (default, 1, "/images/products/chocotorta.jpg", "Chocotorta", "La chocotorta se elabora con galletas de chocolate, crema de queso, dulce de leche y café.", "31-03-23"),
(default, 2, "/images/products/cheescakearandanos.jpg", "Cheesecake de Arandanos", "El cheesecake de arándanos se elabora con queso crema, azúcar, huevos, vainilla y arándanos frescos. La base de la tarta es de galletas trituradas mezcladas con mantequilla derretida.", "31-03-23"),
(default, 3, "/images/products/rogel.jpg", "Rogel", "El rogel se elabora con harina, mantequilla, huevos, azúcar, dulce de leche y coco rallado.", "31-03-23"),
(default, 4, "/images/products/frutilla.jpg", "Torta de Frutilla", "La torta de frutillas es un postre elaborado con ingredientes básicos como harina, huevos, azúcar, leche, mantequilla y frutillas frescas.", "31-03-23"),
(default, 5, "/images/products/oreo.jpg", "Torta Oreo", "La torta Oreo es un postre delicioso elaborado con ingredientes simples como galletas Oreo, queso crema, azúcar y crema batida.", "31-03-23"),
(default, 1, "/images/products/pastafrola.jpg", "Pasta frola de membrillo", "La pasta frola de membrillo se elabora con ingredientes simples como harina, mantequilla, azúcar, huevos y dulce de membrillo.", "31-03-23"),
(default, 2, "/images/products/ricota.jpg", "Torta de Ricota", "La torta de ricota es un postre italiano elaborado con queso ricota, huevos, azúcar, harina y esencia de vainilla.", "31-03-23"),
(default, 3, "/images/products/marquise.jpg", "Marquise", "La marquise es un postre de origen francés elaborado con chocolate, mantequilla, huevos y azúcar.", "31-03-23"),
(default, 4, "/images/products/tiramisu.jpg", "Tiramisú", "El tiramisú es un postre italiano que se elabora con ingredientes simples como queso mascarpone, bizcochos de soletilla, café, huevos y cacao en polvo.", "31-03-23"),
(default, 5, "/images/products/tortachocolate.jpg", "Torta de chocolate", "La torta de chocolate es un postre clásico que se elabora con ingredientes simples como harina, azúcar, huevos, mantequilla, chocolate y cacao en polvo.", "31-03-23");

INSERT INTO comentarios (id, post_id, usuario_id, comentario)
VALUES (default, 1, 1, "La torta que compré estaba deliciosa, la masa suave y esponjosa, y el relleno de chocolate era simplemente divino. Definitivamente volveré a comprar aquí."),
(default, 8, 3, "No me gustó mucho la torta que compré aquí. La masa estaba muy seca y el relleno tenía un sabor extraño. Realmente esperaba algo mejor por el precio que pagué."),
(default, 5, 2, "La torta fue simplemente espectacular. El sabor era delicioso, la masa estaba fresca y el relleno de frutas estaba muy bien distribuido. Sin duda alguna, recomiendo este lugar para comprar tortas."),
(default, 4, 5, "La torta superó todas mis expectativas. La masa estaba suave y esponjosa, el relleno era delicioso y la presentación era hermosa. Definitivamente volveré a comprar aquí.");

