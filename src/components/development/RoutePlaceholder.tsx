export interface RoutePlaceholderProps {
  readonly title: string;
  readonly routeType: string;
}

export default function RoutePlaceholder({
  title,
  routeType,
}: RoutePlaceholderProps) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-32 text-center">
      <p className="text-sm">Geliştirme ortamı</p>
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-base">
        Bu sayfanın içeriği ve tasarımı henüz onaylanmamıştır.
      </p>
      <p className="text-sm">{routeType}</p>
    </main>
  );
}
