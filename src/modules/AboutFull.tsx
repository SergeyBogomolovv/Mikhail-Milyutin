export default function AboutFull() {
  return (
    <div className='grid grid-cols-2 gap-8 mx-auto'>
      <div className='flex justify-center'>
        <div>
          <img
            src='./mikhail.jpg'
            alt=''
            className='rounded-lg lg:w-full w-8/12'
          />
        </div>
      </div>
      <div className='flex h-full flex-col justify-between'>
        <h1 className='sm:text-5xl ssm:text-4xl text-center text-3xl mb-4'>
          Об авторе
        </h1>
        <div className='flex flex-col gap-2 items-center text-[#b0b0b0] text-sm lg:text-lg font-poiret tracking-wider'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sit
            nobis. Voluptatem eos ullam eaque esse beatae labore cum debitis,
            aliquid sit molestiae ex accusamus ipsam veniam quasi tempore ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sit
            nobis. Voluptatem eos ullam eaque esse beatae labore cum debitis,
            aliquid sit molestiae ex accusamus ipsam veniam quasi tempore ipsum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, sit
            nobis. Voluptatem eos ullam eaque esse beatae labore cum debitis,
            aliquid sit molestiae ex accusamus ipsam veniam quasi tempore ipsum?
          </p>
        </div>
      </div>
    </div>
  )
}
