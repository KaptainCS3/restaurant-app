import React from 'react'
import style from "../../style/customerCard.module.css"
import avarta_1 from "../../assets/avartas/pexels-daniel-xavier-1239291.jpg"
import avarta_2 from "../../assets/avartas/pexels-pixabay-220453.jpg"
import avarta_3 from "../../assets/avartas/pexels-stefan-stefancik-91227.jpg"
const CustomerCard = () => {
  return (
    <div className={style.card__customer}>
      <div className={style.avarta__rate}>
        <img src={avarta_1} alt="pexel" />
        <div className={style.rating}>adfafdslfsidf</div>
      </div>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        voluptate nemo porro voluptas tempore. Est incidunt doloribus ea esse,
        alias excepturi beatae dolore laboriosam modi quam aperiam aliquam quia
        temporibus?.
      </p>
    </div>
//     <section className={style.div__section}>
//     <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//   <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
//   <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         “Tailwind CSS is the only framework that I've seen scale
//         on large teams. It’s easy to customize, adapts to any design,
//         and the build size is tiny.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-sky-500 dark:text-sky-400">
//         Sarah Dayan
//       </div>
//       <div class="text-slate-700 dark:text-slate-500">
//         Staff Engineer, Algolia
//       </div>
//     </figcaption>
//   </div>
// </figure>
// </section>
  );
}

export default CustomerCard