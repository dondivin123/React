const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-yellow-200 flex flex-col gap-2 items-center justify-center 
    rounded-tl-[30%] rounded-tr-[30%]">
    <p className="font-bold text-lg">DonDivin  </p>
    <p>&copy; All right reserved, {currentYear}</p>

    </footer>
     
    
  )
}

export default Footer