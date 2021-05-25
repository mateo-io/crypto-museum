import Ether from "../assets/ether"

export default function Footer() {
  return (
    <footer className="bg-grey flex items-center justify-center w-full h-16 border-t">
      <a
        className="flex items-center justify-center"
        href="https://mateomejia.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-darkGrey mx-2">Long Ether</p>
        <Ether />
      </a>
    </footer>
  )
}
