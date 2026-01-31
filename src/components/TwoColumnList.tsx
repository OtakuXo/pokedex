export const TwoColumnList = ({ children, label }: { children: React.ReactNode, label: string }) => {
   return (
      <li className="grid grid-cols-2 items-center">
         <span className="font-bold mr-2 text-end ">{label}: </span>{children}
      </li>
   )
}
