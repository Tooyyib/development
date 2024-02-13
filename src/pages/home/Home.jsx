// import Background from "../../background/Background";

// shared components from scr folder
import Container from "../../components/shared/container/Container";


// courousel images at line 168 - 201
import speech1 from "../../assets/images/speech1.jpg";
import speech2 from "../../assets/images/speech2.jpg";
import quote1 from "../../assets/images/quote1.jpg";
import feed from "../../assets/images/feed.jpg";






function Home() {
 
  return (
    <Container>
      {/* Introductry  text  from line 28 - 165*/}

       <div className="text-center font-extrabold  text-[#38103d] p-[1.5rem]">
        <div className="lg:text-[2.2rem] sm:text-sm">
          THE ZULAYKHA GLOBAL ACADEMY
        </div>
        <div className="lg:text-[1.9rem] lg:my-[1rem] sm:text-sm">ONLINE AND PHYSICAL CLASSES</div>
        <div className="lg:text-[1rem] sm:text-sm">
          ...building unique and pious women
        </div>
      </div> 


      

      <div className="text-center mt-[2rem]">
        <div className="text-[1rem]">
          Strictly for disciplined and morally upright muslim sisters,wives and
          mothers
        </div>
        <div className="text-[1rem]">Enroll your family for better future</div>
      </div>

      {/* section3  available classes*/}
      <div className="mt-[3rem] flex justify-center">
        <div
          className="font-extrabold bg-[#f2878c] text-[#fdf7fb] w-[13rem] text-center text-[0.9rem] rounded"
        >
          AVAILABLE CLASSES ARE:
        </div>
      </div>

      <div className=" md:block justify-center  gap-5 lg:flex  justify-center  sm:block p-5">
        {/* class1 */}

        <div className="my-[2rem] border-[0.2rem] rounded border-[#441d49] font-semibold text-[#3a1642] text-center  hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[11.1rem]">
            TAHFEEZ CLASS
          </div>
          <div className="my-[0rem] flex-col">
            <div className="">
            <div className="p-3 font-extrabold"><p className="text-green-700">monthly</p><p>N10,000</p></div>
            <div className="p-3 font-extrabold"><p className="text-green-700">mon-fri</p><p>weekends</p><p className="text-green-700">duration:</p><p>40min</p></div>
              <div className="p-3">
                <button className="bg-[#441d49] border-dotted border-2 animate-bounce focus:animate-none hover:animate-none   py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                +2348077688028
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* class2 */}
        {/* #f2878c */}
        <div className="my-[2rem] border-[0.2rem] rounded border-[#f2878c] font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#f2878c] text-[#fdf7fb] w-[10rem]">
            GENERAL CLASS
          </div>
          <div className="my-[1rem] flex-col">
            <div>Tilaawah/Hifz</div>
            <div>Khattu/Imla</div>
            <div>Tajweed/Adab</div>
            <div>Hadeeth/Arabiyyah</div>
            <div>Tafsir/Qiraa{" ' "}ah</div>
            <div className="">
            <div className="p-3 font-extrabold"><p className="text-green-700">monthly</p><p>N12,500</p><p className="text-green-700">semester</p><p>N42,000</p></div>
              <div>
                <button className="bg-[#f2878c] animate-bounce focus:animate-none hover:animate-none  border-dotted border-2 py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                +2348077688028
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* class3 */}
        <div className="my-[2rem] border-[0.2rem] rounded border-[#441d49] font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49]  text-[#fdf7fb] w-[11.1rem]">
            JUZ MUJAADILAH
          </div>
          <div className="my-[0rem] flex-col">
            <div className="">
            <div className="p-3 font-extrabold"><p className="text-green-700">monthly</p><p>N12,000</p></div>
            <div className="p-3 font-extrabold"><p className="text-green-700">mon-fri</p><p className="text-green-700">duration:</p><p>40min</p></div>
              <div className="p-3">
                <button className="bg-[#441d49] border-dotted border-2 animate-bounce focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                +2348077688028
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* class4 */}

        <div className="my-[2rem] border-[0.2rem] rounded border-[#f2878c] font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#f2878c] text-[#fdf7fb] w-[11rem] text-[0.9rem]">
            PRIVATE CLASS
          </div>
          <div className="my-[1rem] flex-col">
            <div>Qiraa{" ' "}ah/Tilaawah</div>
            <div>Hifz/Khattu</div>
            <div>Imla/Tajweed</div>
            <div>Hadeeth/Adab</div>
            <div>Arabiyyah</div>
            <div className="">
            <div className="p-3 font-extrabold"><p>monthly</p><p className="text-green-700">4 days per week</p><p>N36,000</p><p className="text-green-700">duration:</p><p>1hr 30min</p></div>
              <div>
                <button className="bg-[#f2878c] border-dotted border-2 animate-bounce focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                +2348077688028
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* class5 */}
        <div className="my-[2rem] border-[0.2rem] rounded border-[#441d49] font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#441d49] text-[#fdf7fb] w-[11rem]">
            ADULT CLASS
          </div>
          <div className="my-[1rem] flex-col">
            <div>Hifz/Arabiyyah</div>
            <div>Hadeeth/Imla</div>
            <div>Aqeedah/Adab</div>
            <div>Khattu/Tajweed</div>
            <div>Qiraa{" ' "}ah/Tilaawah</div>
            <div className="">
            <div className="p-3 font-extrabold"><p className="text-green-700">monthly</p><p>N12,500</p><p className="text-green-700">semester</p><p>N42,000</p></div>

              <div>
                <button className="bg-[#441d49] border-dotted border-2 animate-bounce focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                +2348077688028
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* class6 */}
        <div className="my-[2rem] border-[0.2rem] rounded border-[#f2878c] font-semibold text-[#3a1642] text-center hover:-translate-y-1 duration-700">
          <div className="font-extrabold bg-[#f2878c] text-[#fdf7fb] w-[10rem] text-[0.9rem]">
            KIDDIES-CLASS
          </div>
          <div id="classdays" className="my-[1rem] flex-col">
            <div>Qiraa{" ' "}ah</div>
            <div>Aqeedah</div>
            <div>Hadeeth</div>
            <div>Hifz</div>
            <div>Adab</div>
            <div>Tajweed</div>
            <div className="">
              <div className="p-3 font-extrabold"><p className="text-green-700">monthly</p><p>N12,500</p><p className="text-green-700">semester</p><p>N45,000</p></div>
                <button className="bg-[#f2878c] border-dotted border-2 animate-bounce focus:animate-none hover:animate-none  py-2 px-2 rounded font-bold text-[#fdfdfd] hover:-translate-y-1 duration-700 text-[1rem]">
                +2348077688028
                </button>
         
            </div>
          </div>
        </div>
      </div>

      {/* section4 */}
      {/* service days   from 153 - 165*/}
      <div className="flex justify-center my-[2rem]">
        <div className="border-[0.2rem] rounded border-[#f2878c] font-semibold text-[#3a1642] text-center">
          <div className="font-extrabold bg-[#f2878c] text-[#fdf7fb] md:w-[45rem] sm:w-[40rem] text-[0.9rem]">
            CLASS-DAYS
          </div>
          <div className="my-[1rem]">
            <div>Saturdays & Sundays</div>
            <div className="bg-[#3a1642] text-[#fdf7fb] font-bold">Time :</div>
            <div>8:00am-10:00am</div>
          </div>
        </div>
      </div>

      {/* carousel images  at 168 - 201 */}
      <div className="lg:flex justify-center md:flex justify-center p-5">
        <div
          id="controls-carousel"
          className="relative md:w-[40rem] sm:w-[27rem] my-[3rem] mb-[3rem]"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              {/* image 1  */}
              <img
                src={speech1}
                className="absolute block w-full translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                alt="speech1"
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              {/* image 2  */}
              <img
                src={speech2}
                className="absolute block w-full translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="speech2"
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              {/* image 3  */}
              <img
                src={quote1}
                className="absolute block w-full translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="quote1"
              />
            </div>

            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              {/* image 4  */}
              <img
                src={feed}
                className="absolute block w-full translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="feed"
              />
            </div>
          </div>
          {/* carousel properties  at line 203 - 252 */}
          <button
            type="button"
            className="absolute top-0 left-0 z-20  flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"

>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-20 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      {/*marquee-Element..... class activities  at 255 - 276 */}
      
        {/* <marquee>
          <div className="flex gap-5 text-[#ffff]">
            
            <div className="bg-[#f2878c] w-[20rem] rounded text-center p-2 font-semibold">
               <a href="https://www.facebook.com/photo?fbid=791221883022388&set=a.456047979873115">Feed muslims in Ramadan</a>
            </div>
            <div className="bg-[#f2878c] w-[29rem] rounded text-center p-2 font-semibold">
              <a href="#classdays">
                Class Days: Saturdays and Sundays.Time: 8:00am-10:00am
              </a>
            </div>
            
            <div className="bg-[#f2878c] w-[29rem] rounded text-center p-2 font-semibold">
              <a href="http://wa.me/2348133128088">
                kindly join our whatsapp group for daily spiritual updates
              </a>
            </div>
          </div>
        </marquee> */}
    </Container>
  );
}
export default Home;
