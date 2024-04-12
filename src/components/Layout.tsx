export default function Layout({children}: any) {
  return (
    <div className="p-6 mx-auto flex items-center justify-center h-screen space-x-4"
      style={{backgroundColor: "rgb(35,35,32)"
    }}>{children}</div>
  )
}