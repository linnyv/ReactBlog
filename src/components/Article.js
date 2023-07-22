import React from 'react';
import blogImage1 from"../blog-image-1.jpg";
import blogImage2 from "../blog-image-2.jpg";

export default function Article(props) {
  return (
    <div>
    <article>
        <h4>11/12/20</h4>
        <h2>On the Street in Brooklyn</h2>
        <img src={blogImage1} alt="Image of woman with red dress walking next to a blue brick wall" />
        <p>Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quid deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupidate eveniet velit officis magni alquid, laborum dolor?Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae , itaque voluptaibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupidate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id archietecto impedit consequatur rem quaerat voluptaibus pariatur quas, quod quisquam quo ab molestiae.</p>
        <a style={{textDecoration: 'none'}} href="https://imgflip.com/i/7tcsi8">Continues ...</a>
    </article>
    <article>
        <h4>11/11/20</h4>
        <h2>Vintage in Vogue</h2>
    <img src={blogImage2} alt="Image of an two women and a man's faces"/>
        <p>Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem desrunt nemo dignissimos fuga veniam inventor eligendi magnam aoeriam odit mollitia cupidate eveniet velit officis magni alquid, laborum dolor? Quasi? Veniam amet rerum duimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam alquid debitis rerum, ex consequnntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae dolonibus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupidate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id archietecto impedit consequnntur r</p>
        <a style={{textDecoration: 'none'}} href="https://imgflip.com/i/7tcsi8">Continues ...</a>
  </article>
  </div>
  );
}
