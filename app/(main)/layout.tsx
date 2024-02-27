import Navbar from "@/components/navbar"

const MainLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="max-w-[1400px] mx-auto">
        <Navbar/>
        {children}
    </div>
  )
}

export default MainLayout;