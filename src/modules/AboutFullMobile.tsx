export default function AboutFullMobile() {
  return (
    <div className="flex flex-col">
      <h1 className="sm:text-5xl ssm:text-4xl text-center text-3xl my-4">
        Об авторе
      </h1>
      <div className="flex flex-col mx-auto">
        <p className="text-neutral-300 text-sm tracking-wider text-center">
          Художник, создатель драгоценностей. Его работы становятся подарками
          сильным мира сего, а сам мастер считается одним из ведущих ювелиров
          современной России.
        </p>
        <img
          loading="lazy"
          src="./mikhail.jpg"
          alt=""
          className="rounded-lg my-6 w-8/12 mx-auto"
        />
        <div className="flex flex-col gap-3 items-center text-neutral-300 text-sm tracking-wider text-center">
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
  );
}
