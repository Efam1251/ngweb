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
  compact = false,
) {
  const unitKey = compact ? "unitShort" : "unit";
  return durationParts(diff)
    .map((part) => {
      const plural = part.n === 1 ? "" : "s";
      return t(`news.${unitKey}.${part.unit}${plural}`, { n: part.n });
    })
    .join(t(compact ? "news.durationJoinShort" : "news.durationJoin"));
}

function formatCell(
  cell: BulletinCell,
  locale: string,
  t: (key: string) => string,
  compact = false,
) {
  if (cell.type === "current") return t(compact ? "news.currentShort" : "news.current");
  if (cell.type === "unavailable") {
    return t(compact ? "news.unavailableShort" : "news.unavailable");
  }
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
  compact = false,
) {
  if (move.kind === "advance" && move.diff) {
    return t(compact ? "news.advancedShort" : "news.advanced", {
      duration: formatDuration(move.diff, t, compact),
    });
  }
  if (move.kind === "retrogress" && move.diff) {
    return t(compact ? "news.retrogressedShort" : "news.retrogressed", {
      duration: formatDuration(move.diff, t, compact),
    });
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
      <table className="w-max min-w-full table-fixed border-collapse text-left text-[0.78rem] leading-snug">
        <colgroup>
          <col className="w-[9.5rem]" />
          {CHARGEABILITIES.map((region) => (
            <col key={region} className="w-[7.75rem]" />
          ))}
        </colgroup>
        <caption className="mb-2 text-left text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {t(`news.chart.${chart}`)} · {currentLabel} {t("news.vs")} {previousLabel}
        </caption>
        <thead>
          <tr className="border-b border-line bg-fog/70 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">
            <th scope="col" className="px-2 py-2 align-bottom">
              {t("news.category")}
            </th>
            {CHARGEABILITIES.map((region) => (
              <th
                key={region}
                scope="col"
                title={t(`news.region.${region}`)}
                className="px-2 py-2 align-bottom"
              >
                {t(`news.regionShort.${region}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FAMILY_CATEGORIES.map((category) => (
            <tr key={category} className="border-b border-line align-top">
              <th
                scope="row"
                title={t(`news.cat.${category}`)}
                className="px-2 py-2 font-semibold text-navy"
              >
                <span className="block">{category}</span>
                <span className="mt-0.5 block text-[0.62rem] font-normal leading-tight text-muted break-words">
                  {t(`news.cat.${category}`)}
                </span>
              </th>
              {CHARGEABILITIES.map((region) => {
                const move = byCategory
                  .get(category)
                  ?.find((row) => row.region === region);
                if (!move) return <td key={region} />;
                return (
                  <td key={region} className="px-2 py-2 align-top">
                    <p
                      className="font-semibold text-navy break-words"
                      title={formatCell(move.current, locale, t)}
                    >
                      {formatCell(move.current, locale, t, true)}
                    </p>
                    <p
                      className={`mt-0.5 text-[0.68rem] font-semibold break-words ${movementClass(move.kind)}`}
                    >
                      {movementLabel(move, t, true)}
                    </p>
                    {move.kind === "advance" || move.kind === "retrogress" ? (
                      <p className="mt-0.5 text-[0.62rem] leading-tight text-slate break-words">
                        {t("news.was")} {formatCell(move.previous, locale, t, true)}
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

function CompactMoves({ rows }: { rows: CellMovement[] }) {
  const { t, locale } = useI18n();
  return (
    <div className="overflow-x-auto border border-line bg-white">
      <table className="w-full min-w-[36rem] table-fixed border-collapse text-left text-[0.78rem] leading-snug">
        <colgroup>
          <col className="w-[5.5rem]" />
          <col className="w-[3.25rem]" />
          <col className="w-[6.5rem]" />
          <col className="w-[7.5rem]" />
          <col />
        </colgroup>
        <thead>
          <tr className="border-b border-line bg-fog/70 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">
            <th className="px-2 py-1.5">{t("news.chartColumn")}</th>
            <th className="px-2 py-1.5">{t("news.category")}</th>
            <th className="px-2 py-1.5">{t("news.chargeability")}</th>
            <th className="px-2 py-1.5">{t("news.movement")}</th>
            <th className="px-2 py-1.5">{t("news.dates")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((move) => (
            <tr
              key={`${move.chart}-${move.category}-${move.region}`}
              className="border-b border-line last:border-0"
            >
              <td className="px-2 py-1.5 text-muted">
                {t(`news.chartShort.${move.chart}`)}
              </td>
              <td className="px-2 py-1.5 font-semibold text-navy">{move.category}</td>
              <td
                className="px-2 py-1.5 text-muted break-words"
                title={t(`news.region.${move.region}`)}
              >
                {t(`news.regionShort.${move.region}`)}
              </td>
              <td className={`px-2 py-1.5 font-semibold break-words ${movementClass(move.kind)}`}>
                {movementLabel(move, t, true)}
              </td>
              <td className="px-2 py-1.5 text-muted break-words">
                {formatCell(move.previous, locale, t, true)} →{" "}
                {formatCell(move.current, locale, t, true)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompactMatrix({
  caption,
  cells,
}: {
  caption: string;
  cells: Record<FamilyCategory, Record<Chargeability, { value: string; detail?: string }>>;
}) {
  const { t } = useI18n();
  return (
    <div className="overflow-x-auto border border-line bg-white">
      <table className="w-max min-w-full table-fixed border-collapse text-left text-[0.78rem] leading-snug">
        <colgroup>
          <col className="w-[3.25rem]" />
          {CHARGEABILITIES.map((region) => (
            <col key={region} className="w-[7.25rem]" />
          ))}
        </colgroup>
        <caption className="mb-2 px-2 pt-2 text-left text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-line bg-fog/70 text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-muted">
            <th className="px-2 py-1.5">{t("news.category")}</th>
            {CHARGEABILITIES.map((region) => (
              <th
                key={region}
                title={t(`news.region.${region}`)}
                className="px-2 py-1.5"
              >
                {t(`news.regionShort.${region}`)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FAMILY_CATEGORIES.map((category) => (
            <tr key={category} className="border-b border-line last:border-0">
              <th scope="row" className="px-2 py-1.5 font-semibold text-navy">
                {category}
              </th>
              {CHARGEABILITIES.map((region) => {
                const cell = cells[category][region];
                return (
                  <td key={region} className="px-2 py-1.5 align-top">
                    <p className="font-semibold text-navy break-words">{cell.value}</p>
                    {cell.detail ? (
                      <p className="mt-0.5 text-[0.62rem] leading-tight text-slate break-words">
                        {cell.detail}
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

  const backlogCells = Object.fromEntries(
    FAMILY_CATEGORIES.map((category) => [
      category,
      Object.fromEntries(
        CHARGEABILITIES.map((region) => {
          const cell = parseVisaBulletinToken(current.finalAction[category][region]);
          const behind = backlogVsMonth(cell, current.monthStart);
          if (!behind || cell.type !== "date") {
            return [region, { value: formatCell(cell, locale, t, true) }];
          }
          const faIsAhead = cell.iso >= current.monthStart;
          return [
            region,
            {
              value: faIsAhead
                ? t("news.nearCurrent", { duration: formatDuration(behind, t, true) })
                : formatDuration(behind, t, true),
              detail: formatIsoDate(cell.iso, locale),
            },
          ];
        }),
      ),
    ]),
  ) as Record<FamilyCategory, Record<Chargeability, { value: string; detail?: string }>>;

  const leadCells = Object.fromEntries(
    FAMILY_CATEGORIES.map((category) => [
      category,
      Object.fromEntries(
        CHARGEABILITIES.map((region) => {
          const fa = parseVisaBulletinToken(current.finalAction[category][region]);
          const filing = parseVisaBulletinToken(
            current.datesForFiling[category][region],
          );
          if (filing.type === "current") {
            return [
              region,
              {
                value: t("news.currentShort"),
                detail: `${formatCell(fa, locale, t, true)} → ${t("news.currentShort")}`,
              },
            ];
          }
          const lead = filingLead(fa, filing);
          return [
            region,
            {
              value: lead ? formatDuration(lead, t, true) : "—",
              detail: `${formatCell(fa, locale, t, true)} → ${formatCell(filing, locale, t, true)}`,
            },
          ];
        }),
      ),
    ]),
  ) as Record<FamilyCategory, Record<Chargeability, { value: string; detail?: string }>>;

  return (
    <div className="space-y-10">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="border border-line bg-white px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {t("news.statFinalAction")}
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-navy">
            {faCounts.advanced}/{faCounts.total}
          </p>
          <p className="mt-1 text-sm text-muted">{t("news.statAdvanced")}</p>
        </div>
        <div className="border border-line bg-white px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {t("news.statFiling")}
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-navy">
            {filingCounts.advanced}/{filingCounts.total}
          </p>
          <p className="mt-1 text-sm text-muted">{t("news.statAdvanced")}</p>
        </div>
        <div className="border border-line bg-white px-4 py-3.5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent">
            {t("news.statHeld")}
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-navy">
            {faCounts.held}
          </p>
          <p className="mt-1 text-sm text-muted">{t("news.statHeldFa")}</p>
        </div>
      </div>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">
          {t("news.whatChanged")}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          {t("news.whatChangedBody", {
            current: currentLabel,
            previous: previousLabel,
          })}
        </p>
        <div className="mt-3">
          <CompactMoves rows={advances} />
        </div>
      </section>

      <section className="border border-line bg-white p-3 sm:p-4">
        <ComparisonTable
          chart="finalAction"
          previousLabel={previousLabel}
          currentLabel={currentLabel}
          rows={finalAction}
        />
      </section>

      <section className="border border-line bg-white p-3 sm:p-4">
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
        <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">
          {t("news.backlogTitle")}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          {t("news.backlogBody", { month: currentLabel })}
        </p>
        <div className="mt-3">
          <CompactMatrix
            caption={t("news.backlogCaption")}
            cells={backlogCells}
          />
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">
          {t("news.gapTitle")}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          {t("news.gapBody")}
        </p>
        <div className="mt-3">
          <CompactMatrix caption={t("news.gapCaption")} cells={leadCells} />
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
