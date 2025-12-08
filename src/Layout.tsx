import TopBar from "./components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <div className="bg-primaryBackground min-w-full min-h-screen ">
         <div className="sticky top-0">
            <TopBar />
         </div>
         <div className="text-primaryForground py-10">
            {children}
         </div>
      </div>
   )
}

