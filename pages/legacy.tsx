export async function getServerSideProps() {
  return { props: { ok: true } };
}

export default function LegacyPage({ ok }: { ok: boolean }) {
  return <main>Pages Router page: {String(ok)}</main>;
}
