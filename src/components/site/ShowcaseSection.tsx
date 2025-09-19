import Image from "next/image";

export default function ShowcaseSection() {
  const projects = [
    {
      title: "VĂN PHÒNG SPACE.S",
      date: "23 tháng 11 năm 2023",
      img: "https://vlxdgiatot.com/wp-content/uploads/2024/11/VAN-PHONG-SPACES.jpg",
      desc: "Công trình văn phòng hoàn thiện nội thất.",
    },
    {
      title: "VĂN PHÒNG BLUESCOPE",
      date: "30 tháng 10 năm 2024",
      img: "https://vlxdgiatot.com/wp-content/uploads/2024/10/VAN-PHONG-BLUESCOPE.jpg",
      desc: "Dự án cải tạo và hoàn thiện văn phòng.",
    },
    {
      title: "VĂN PHÒNG NAB VIỆT NAM",
      date: "12 tháng 9 năm 2022",
      img: "https://vlxdgiatot.com/wp-content/uploads/2024/08/VAN-PHONG-NAB-VIET-NAM.jpg",
      desc: "Thiết kế & thi công nội thất văn phòng.",
    },
  ];

  return (
    <section id="du-an" className="showcase-section mx-auto container-max px-4 py-16 md:px-6">
      <div className="mb-8 text-center">
        <h2 className="section-title text-3xl font-bold tracking-tight text-white">Dự án tiêu biểu</h2>
        <p className="mt-2 text-sm text-white/80">Một vài công trình mà NovaBuild đã đồng hành</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="relative project-card overflow-hidden rounded-lg">
            <div className="relative h-56 w-full">
              <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover" }} className="transition-transform duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Date badge top-left */}
            <div className="absolute left-3 top-3 z-20 rounded-md bg-white/6 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              {p.date}
            </div>

            {/* Info bottom-left */}
            <div className="absolute left-4 bottom-4 z-20 max-w-[85%]">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/80">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
