import Image from 'next/image';


export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
        <div className="w-full lg:w-1/2 mx-8">
          <div className="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal mb-8">
            Oops. Internet gremlings seem to have vanquished that page. We can{"'"}t find it.
          </p>

          <a href="#" className="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</a>
        </div>
        <div className="w-full lg:w-1/2 mx-5 my-12">
          <Image
          width={1119}
          height={699}
          layout="responsive"
          className=''
          src="/images/404.svg" 
          alt="Page not found" />
        </div>

      </div>
    </div>
  )
}