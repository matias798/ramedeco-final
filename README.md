##Cosas que faltaron del sprint_6
el metodo de index sigue llamando a json y el tratamiento de una factura no se pudo llegar y obtener objetos por categoria. Algo que aparecio al hacer un select es que sequelize modificaba las foraneas. En vez tener  un guion bajo para las foraneas o para los timestamps pasaba lo mismo. Eso causaba que las select se rompiera ya que no concordaba con la base. Pasado eso se logro arreglar los timestamps agregando config. 
Para los foraneas habia varios problemas primero un error tipografico en las relaciones. arreglando eso pasaba lo mismo. La forma de arreglarlo fue sacar la descripcion de las relaciones ya que el efecto de por ejemplo poner foreign key no pasaba. se soluciono usando  "underscored": true. Pero eso trajo modificaciones en los scripts de base la base y roturas en querys, mas las que faltaban por hacer. 

los usuarios para probar son 
USUARIO:user
CONTRASEÑA:123456
USUARIO:admin
CONTRASEÑA:123456

## Nuestro Ecommerce

Nuestro sitio es un tienda virtual orientada a la venta de decoración de ambientes, herramientas y insumos para la construcción. Nuestra audiencia se dividirá en:

- Aquellos que desean decorar su primer hogar o un ambiente sin tener conocimientos en decoración.
- Aquellos que desean adquirir productos de decoración para modificar algún ambiente de su hogar sea de interior o exterior.

En nuestro ecommerce se ajustara la oferta para ambas categorías mencionadas. Para el primer grupo se presentaran imágenes con productos de nuestra tienda y se agregara efectos a la imagen para reflejar los productos adquiridos (ejemplo Ikea).
Para el segundo grupo brindaremos diferentes categorías para poder llegar al producto deseado. Como idea general pretendemos tener una tienda simple que permita llegar al producto deseado en pocos clicks.



## ***Sitios de Referencia Utilizados:***

https://www.apple.com/la/mac/ 

Nos gusta la forma en que se presenta el detalle del producto y la accesibilidad de la pagina para realizar la compra.

https://uphold.com/en-us/

Nos atrajo el diseño de los banners y la integración con la búsqueda. Además el contraste con los botones en la pagina

https://www.ikea.com/us/en/

Nos gusto la forma de presentar los productos a partir de una imagen, teniendo efectos al pasar el mouse sobre la misma

https://idea-theme.mitiendanube.com/

Nos gusto el formato minimalista, el anclaje de la barra con el logo. El formato de las imágenes es algo que nos gustaría replicar en nuestro ecommerce . Y el botón de las tres líneas con las categorías.

https://www.etq-amsterdam.com/editorial/new-essence-series/

Nos atrajo el minimalismo de la pagina y la venta e presentación concreta del producto. 

https://badruttspalace.com/winter/

Nos gusto la idea del banner pero quizás para nuestro producto seria mejor imágenes y no un video

https://www.potterybarn.com/

Nos gusto la parte del footer como presenta el contenido y las redes. Además la presentación de las imágenes con los productos 



## *Integrantes*



#### *Agustina Sánchez Ré*

Agus, 23 años. Soy estudiante de Ing. Industrial en FIUBA, doy clases de inglés, me gusta la música, los perros, el mate, viajar, leer y aprender cosas nuevas.

#### *Ezequiel Garcia Riveros*

Eze, 29 años.Ingeniero.Me gusta viajar, los desafios y a amo mi perra. Me considero muy responsable y quiero crecer como profesional! 

#### *Matías Quiroga*

  Matias, tengo 19 años.Estudio analista de sistemas en el politecnico y soy de Rosario, me considero una persona honesta y actualmente estoy tratando de aprender más sobre el desarrollo web para lograr impulsar mi carrera profesional en el área.

#### *Rubén Eliett*

  Rubén. Soy Ingeniero Mecánico, me gusta estudiar todo sobre los mercados financieros, conocer nuevos lugares y aprender constantemente. Desde hace algún tiempo me llamó la atención el desarrollo web, y ahora quiero convertirme en desarrollador Full Stack.


Nuestra management tool es trello la cual puede ser vista usando este link https://trello.com/b/1TgNGe3C/dhram%C3%A9-deco
