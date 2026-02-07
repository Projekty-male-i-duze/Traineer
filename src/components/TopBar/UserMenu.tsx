export function UserMenu() {
  return (
    <div className="lg:order-4 lg:mx-4 cursor-pointer transition-all hover:scale-110">
      <img
        src="/dog.jpg"
        alt="Zdjęcie użytkownika"
        className="h-12 w-12 rounded-4xl object-cover object-center lg:grow"
        width="100"
        height="100"
      />
    </div>
  );
}
