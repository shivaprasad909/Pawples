export default function OrderDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-[60vh] bg-ivory flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-nunito font-extrabold text-4xl text-plum mb-2">Order #{params.id}</h1>
        <p className="text-bark/60 font-dm-sans">Coming soon — Pawples</p>
      </div>
    </div>
  );
}
