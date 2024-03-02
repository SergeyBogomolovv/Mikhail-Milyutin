export default function AboutFull() {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='sm:text-5xl ssm:text-4xl text-center text-3xl mb-4'>
        Об авторе
      </h1>
      <div className='grid grid-cols-[3fr_5fr] gap-12 mx-auto'>
        <img src='./mikhail.jpg' alt='' className='rounded-lg m-auto' />
        <div className='flex flex-col gap-3 items-center text-lightgray font-monsterrat text-sm lg:text-base tracking-wider text-center'>
          <p>
            Художник, создатель драгоценностей. Его работы становятся подарками
            сильным мира сего, а сам мастер считается одним из ведущих ювелиров
            современной России.
          </p>
          <p>
            В мастерской Михаила Милютина принимаются заказы, на изготовление
            предметов ювелирного искусства, по индивидуальным проектам клиента -
            могут быть как уникальные произведения в единственном экземпляре,
            так и драгоценности для малосерийного производства. Произведения -
            это украшения для мужчин и женщин, статусные памятные сувениры:
            ручки с драгоценным декором и горячей эмалью, которая украшает
            поверхность эксклюзивных письменных принадлежностей, печати и
            медали, мотивы живой природы, литературные сюжеты.
          </p>
          <p>
            Произведения Михаила Милютина – синтез ювелирного мастерства и
            художественной фантазии. Награды и подарки, изготовленные Милютиным,
            становятся атрибутами высокого общественного положения и
            подтверждением личных заслуг своих обладателей.
          </p>
        </div>
      </div>
    </div>
  )
}
