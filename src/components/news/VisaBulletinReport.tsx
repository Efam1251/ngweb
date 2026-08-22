import {
  CHARGEABILITIES,
  FAMILY_CATEGORIES,
  backlogVsMonth,
  compareCharts,
  durationParts,
  filingLead,
  formatIsoDate,
  movementCounts,
  parseVisaBulletinToken,
  topAdvances,
  type BulletinCell,
  type BulletinChartId,
  type CalendarDiff,
  type CellMovement,
  type Chargeability,
  type FamilyCategory,
  type MovementKind,
} from "@/lib/visaBulletin";
import type { NewsPost } from "@/data/news";
import { useI18n } from "@/i18n";

type Props = {
  post: NewsPost;
};

function formatDuration(
  diff: CalendarDiff,
  t: (key: string, vars?: Record<string, string | number>) => string,
) {
  return durationParts(diff)
    .map((part) => {
      const plural = part.n === 1 ? "" : "s";
      return t(`news.unit.${part.unit}${plural}`, { n: part.n });
    })
    .join(t("news.durationJoin"));
}

function formatCell(
  cell: BulletinCell,
  locale: string,
  t: (key: string) => string,
) {
  if (cell.type === "current") return t("news.current");
  if (cell.type === "unavailable") return t("news.unavailable");
  return formatIsoDate(cell.iso, locale);
}

function movementClass(kind: MovementKind) {
  if (kind === "advance" || kind === "became-current") return "text-emerald-700";
  if (kind === "retrogress" || kind === "lost-current") return "text-red-700";
  if (kind === "still-current") return "text-accent";
  return "text-slate";
}

function movementLabel(
  move: CellMovement,
  t: (key: string, vars?: Record<string, string | number>) => string,
) {
  if (move.kind === "advance" && move.diff) {
    return t("news.advanced", { duration: formatDuration(move.diff, t) });
  }
  if (move.kind === "retrogress" && move.diff) {
    return t("news.retrogressed", { duration: formatDuration(move.diff, t) });
  }
  if (move.kind === "became-current") return t("news.becameCurrent");
  if (move.kind === "lost-current") return t("news.lostCurrent");
  if (move.kind === "still-current") return t("news.stillCurrent");
  return t("news.held");
}

function ComparisonTable({
  chart,
  previousLabel,
  currentLabel,
  rows,
}: {
  chart: BulletinChartId;
  previousLabel: string;
  currentLabel: string;
  rows: CellMovement[];
}) {
  const { t, locale } = useI18n();
  const byCategory = new Map<FamilyCategory, CellMovement[]>();
  for (const category of FAMILY_CATEGORIES) {
    byCategory.set(
      category,
      rows.filter((row) => row.category === category),
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
        <caption className="mb-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {t(`news.chart.${chart}`)} · {currentLabel} {t("news.vs")} {previousLabel}
        </caption>
        <thead>
          <tr className="border-b border-line bg-fog/70 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
            <th scope="col" className="px-3 py-3">
              {t("news.category")}
            </th>
            {CHARGEABILITIES.map((region) => (
              <th key={region} scope="col" className="px-3 py-3">
                {t(`news.region.${region}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FAMILY_CATEGORIES.map((category) => (
            <tr key={category} className="border-b border-line align-top">
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-4 font-semibold text-navy"
              >
                <span>{category}</span>
                <span className="mt-1 block max-w-[11rem] text-[0.7rem] font-normal leading-snug text-muted">
                  {t(`news.cat.${category}`)}
                </span>
              </th>
              {CHARGEABILITIES.map((region) => {
                const move = byCategory
                  .get(category)
                  ?.find((row) => row.region === region);
                if (!move) return <td key={region} />;
                return (
                  <td key={region} className="px-3 py-4">
                    <p className="font-semibold text-navy">
                      {formatCell(move.current, locale, t)}
                    </p>
                    <p className={`mt-1 text-xs font-semibold ${movementClass(move.kind)}`}>
                      {movementLabel(move, t)}
                    </p>
                    {move.kind === "advance" || move.kind === "retrogress" ? (
                      <p className="mt-1 text-[0.7rem] text-slate">
                        {t("news.was")} {formatCell(move.previous, locale, t)}
                      </p>
                    ) : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InsightTable({
  caption,
  rows,
}: {
  caption: string;
  rows: Array<{
    category: FamilyCategory;
    region: Chargeability;
    value: string;
    detail?: string;
  }>;
}) {
  const { t } = useI18n();
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <caption className="mb-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-line bg-fog/70 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
            <th className="px-3 py-3">{t("news.category")}</th>
            <th className="px-3 py-3">{t("news.chargeability")}</th>
            <th className="px-3 py-3">{t("news.figure")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={`${row.category}-${row.region}`}
              className="border-b border-line"
            >
              <td className="px-3 py-3 font-semibold text-navy">
                {row.category}
              </td>
              <td className="px-3 py-3 text-muted">
                {t(`news.region.${row.region}`)}
              </td>
              <td className="px-3 py-3">
                <span className="font-semibold text-navy">{row.value}</span>
                {row.detail ? (
                  <span className="mt-0.5 block text-xs text-slate">{row.detail}</span>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function VisaBulletinReport({ post }: Props) {
  const { t, locale } = useI18n();
  const bulletin = post.bulletin;
  if (!bulletin) return null;

  const { current, previous } = bulletin;
  const finalAction = compareCharts(previous, current, "finalAction");
  const datesForFiling = compareCharts(previous, current, "datesForFiling");
  const faCounts = movementCounts(finalAction);
  const filingCounts = movementCounts(datesForFiling);
  const advances = topAdvances([...finalAction, ...datesForFiling], 8);
  const currentLabel = t(`news.monthName.${current.labelKey}`);
  const previousLabel = t(`news.monthName.${previous.labelKey}`);

  const backlogRows = FAMILY_CATEGORIES.flatMap((category) =>
    CHARGEABILITIES.map((region) => {
      const cell = parseVisaBulletinToken(current.finalAction[category][region]);
      const behind = backlogVsMonth(cell, current.monthStart);
      if (!behind || cell.type !== "date") return null;
      const faIsAhead = cell.iso >= current.monthStart;
      return {
        category,
        region,
        value: faIsAhead
          ? t("news.nearCurrent", { duration: formatDuration(behind, t) })
          : formatDuration(behind, t),
        detail: `${t("news.finalActionDate")}: ${formatIsoDate(cell.iso, locale)}`,
      };
    }),
  ).filter((row) => row !== null);

  const leadRows = FAMILY_CATEGORIES.flatMap((category) =>
    CHARGEABILITIES.map((region) => {
      const fa = parseVisaBulletinToken(current.finalAction[category][region]);
      const filing = parseVisaBulletinToken(
        current.datesForFiling[category][region],
      );
      if (filing.type === "current") {
        return {
          category,
          region,
          value: t("news.filingCurrent"),
          detail: `${t("news.finalActionDate")}: ${formatCell(fa, locale, t)}`,
        };
      }
      const lead = filingLead(fa, filing);
      if (!lead) return null;
      return {
        category,
        region,
        value: formatDuration(lead, t),
        detail: `${formatCell(fa, locale, t)} → ${formatCell(filing, locale, t)}`,
      };
    }),
  ).filter((row) => row !== null);

  return (
    <div className="space-y-14">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="border border-line bg-white p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {t("news.statFinalAction")}
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-navy">
            {faCounts.advanced}/{faCounts.total}
          </p>
          <p className="mt-1 text-sm text-muted">{t("news.statAdvanced")}</p>
        </div>
        <div className="border border-line bg-white p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {t("news.statFiling")}
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-navy">
            {filingCounts.advanced}/{filingCounts.total}
          </p>
          <p className="mt-1 text-sm text-muted">{t("news.statAdvanced")}</p>
        </div>
        <div className="border border-line bg-white p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {t("news.statHeld")}
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-navy">
            {faCounts.held}
          </p>
          <p className="mt-1 text-sm text-muted">{t("news.statHeldFa")}</p>
        </div>
      </div>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
          {t("news.whatChanged")}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {t("news.whatChangedBody", {
            current: currentLabel,
            previous: previousLabel,
          })}
        </p>
        <ul className="mt-6 space-y-3">
          {advances.map((move) => (
            <li
              key={`${move.chart}-${move.category}-${move.region}`}
              className="border border-line bg-white px-5 py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {t(`news.chart.${move.chart}`)}
              </p>
              <p className="mt-1 font-semibold text-navy">
                {move.category} · {t(`news.region.${move.region}`)}
              </p>
              <p className="mt-1 text-sm text-muted">
                {formatCell(move.previous, locale, t)} →{" "}
                {formatCell(move.current, locale, t)} · {movementLabel(move, t)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border border-line bg-white p-4 sm:p-6">
        <ComparisonTable
          chart="finalAction"
          previousLabel={previousLabel}
          currentLabel={currentLabel}
          rows={finalAction}
        />
      </section>

      <section className="border border-line bg-white p-4 sm:p-6">
        <ComparisonTable
          chart="datesForFiling"
          previousLabel={previousLabel}
          currentLabel={currentLabel}
          rows={datesForFiling}
        />
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {t("news.chartBNote")}{" "}
          <a
            href={bulletin.uscisChartInfoUrl}
            className="font-semibold text-accent underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            uscis.gov/visabulletininfo
          </a>
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
          {t("news.backlogTitle")}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {t("news.backlogBody", { month: currentLabel })}
        </p>
        <div className="mt-6 border border-line bg-white p-4 sm:p-6">
          <InsightTable
            caption={t("news.backlogCaption")}
            rows={backlogRows}
          />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
          {t("news.gapTitle")}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
          {t("news.gapBody")}
        </p>
        <div className="mt-6 border border-line bg-white p-4 sm:p-6">
          <InsightTable caption={t("news.gapCaption")} rows={leadRows} />
        </div>
      </section>

      <aside className="border border-gold/30 bg-fog/60 px-5 py-5 text-sm leading-relaxed text-muted sm:px-6">
        <p>{t("news.caution")}</p>
        <p className="mt-3">
          {t("news.source")}{" "}
          <a
            href={current.officialUrl}
            className="font-semibold text-accent underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {t("news.officialBulletin")}
          </a>
          {" · "}
          <a
            href={previous.officialUrl}
            className="font-semibold text-accent underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {previousLabel}
          </a>
        </p>
        <p className="mt-3">{t("news.disclaimer")}</p>
      </aside>
    </div>
  );
}
