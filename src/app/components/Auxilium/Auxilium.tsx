import AuxiliumMediaPanel from '@/app/components/Auxilium/AuxiliumMediaPanel';
import AuxiliumOverview from '@/app/components/Auxilium/AuxiliumOverview';

export default function Auxilium() {
  return (
    <section className="auxiliumSlide">
      <div className="auxiliumMain">
        <AuxiliumOverview />
        <AuxiliumMediaPanel />
      </div>
    </section>
  );
}
