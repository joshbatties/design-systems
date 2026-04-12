import type { ComponentApiProp } from "@/lib/content";

export function PropsTable({ props }: { props: ComponentApiProp[] }) {
  if (props.length === 0) return null;
  return (
    <div className="rounded-lg border border-white/[0.06] overflow-hidden">
      <table className="w-full border-collapse text-left text-[12px]">
        <thead>
          <tr className="bg-white/[0.02] border-b border-white/[0.06]">
            <th className="px-4 py-2 font-medium text-white/50 text-[10px] uppercase tracking-wider w-[20%]">
              Prop
            </th>
            <th className="px-4 py-2 font-medium text-white/50 text-[10px] uppercase tracking-wider w-[32%]">
              Type
            </th>
            <th className="px-4 py-2 font-medium text-white/50 text-[10px] uppercase tracking-wider w-[16%]">
              Default
            </th>
            <th className="px-4 py-2 font-medium text-white/50 text-[10px] uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((p, i) => (
            <tr
              key={p.name}
              className={
                i < props.length - 1
                  ? "border-b border-white/[0.04]"
                  : undefined
              }
            >
              <td className="px-4 py-2.5 font-mono text-white/90 align-top">
                {p.name}
                {p.required && (
                  <span className="ml-1 text-[#EE0000]">*</span>
                )}
              </td>
              <td className="px-4 py-2.5 font-mono text-white/60 align-top">
                {p.type}
              </td>
              <td className="px-4 py-2.5 font-mono text-white/50 align-top">
                {p.default ?? "—"}
              </td>
              <td className="px-4 py-2.5 text-white/70 align-top leading-relaxed">
                {p.description ?? "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
