import signe from "../../assets/check-mark.png";
const QuickAccess = () => {
    const image = [1,2,3]
    return (
        <div className="px-2 md:px-8 xl:px-16 md:mt-20  mt-10 ">
            <div className="mb-10 text-center">
        <div className="flex justify-center items-center gap-2">
          <img src={signe} alt="check-mark" className="w-12 md:w-14" />
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Quick Information 
            <span className="text-[#4CAF50]"> Accessibility</span>
          </h2>
        </div>
        <p className="mt-3 text-sm md:text-base text-gray-600">
        Ensure users can easily access key information with minimal effort. Design intuitive navigation and clear pathways to deliver the right content instantly.
        </p>
      </div>
            <div className="grid grid-cols-3">
            <div>
                <h5>important links</h5>
                <a href="">Office of the President</a>
                <a href="">Prime Minister's Office</a>
                <a href="">Bangladesh Employees Welfare Board</a>
                <a href="">National Skill Development Authority</a>
                <a href="">Primary digital content</a>
            </div>
            <div>
                <h5>Internal e-services</h5>
                <a href="">Web mail</a>
                <a href="">Online recruitment system</a>
                <a href="">Scholarships and ICT Innovation Grants</a>
                <a href="">National Enterprise Architecture</a>
                
            <div>
                <h5>Emergency hotline</h5>
                <div className="grid grid-cols-4 justify-center items-center gap-2">
                    {
                        image.map(item => <img src="" alt="" key={item}/>)
                    }
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default QuickAccess;