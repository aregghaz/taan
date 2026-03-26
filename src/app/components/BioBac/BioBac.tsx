const BIOBAC_TAGS = ['Contacts', 'Sales', 'Companies', 'Products'] as const;

const BIOBAC_STATS = [
  { value: '04', label: 'core flows' },
  { value: 'B2B', label: 'operations focus' },
  { value: 'ERP', label: 'admin structure' },
] as const;

const BIOBAC_CHECKLIST = [
  'Large registries with search, export, filter, and add actions',
  'Form-first sales flow with line, company, contacts, dates, and products',
  'Quiet neutral palette with blue primary actions and minimal decoration',
] as const;

const BIOBAC_SIDEBAR_ITEMS = [
  'Компании',
  'Справочники',
  'Линии',
  'Контактные лица',
  'Оплати',
  'Продажи',
  'Продукты',
  'Ингредиенты',
] as const;

const BIOBAC_TABLE_COLUMNS = [
  'Название',
  'Должность',
  'Телефон',
  'Email',
  'Действия',
] as const;

const BIOBAC_TABLE_ROWS = [
  {
    name: 'Оксана, Гежа',
    role: 'Руководитель клиентского сервиса',
    phone: '+79185273057',
    email: 'o.gezha@bionex.pro',
  },
  {
    name: 'Виталий Владимирович, Василенко',
    role: 'Заместитель ген.директора',
    phone: '+74833645291',
    email: 'info@klintsy-polimer.ru',
  },
  {
    name: 'Анна Владимировна, Сапрыкина',
    role: 'Директор парфюмерно-косметического направления',
    phone: '+79032468373',
    email: 'anna.saprykina@mail.ru',
  },
] as const;

const BIOBAC_FORM_FIELDS = [
  'Название сделки',
  'Линия',
  'Компания',
  'Контактные лица',
  'Дата заказа',
  'Дата продажи',
] as const;

const BIOBAC_PRODUCTS = [
  {
    sku: 'BB-SU010',
    group: 'Жидкие биологические средства',
    date: '23/12/2025',
  },
  {
    sku: 'BB-S180',
    group: 'Жидкие биологические средства',
    date: '16/12/2025',
  },
] as const;

export default function BioBac() {
  return (
    <section className="bioBacSlide">
      <div className="bioBacShell">
        <div className="bioBacContent">
          <p className="bioBacEyebrow">Admin Platform</p>
          <h1>BioBac</h1>
          <p className="bioBacSubtitle">
            Operations UI for contacts, companies, sales, and product records.
          </p>
          <p className="bioBacLead">
            The screens point to a quiet enterprise dashboard rather than a
            branded marketing product. This version follows that logic with soft
            gray surfaces, restrained borders, black text, and a blue action
            accent that matches the real interface.
          </p>

          <div className="bioBacTagRow" aria-label="BioBac modules">
            {BIOBAC_TAGS.map((tag) => (
              <span key={tag} className="bioBacTag">
                {tag}
              </span>
            ))}
          </div>

          <div className="bioBacStatsGrid">
            {BIOBAC_STATS.map((item) => (
              <article key={item.label} className="bioBacStatCard">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>

          <article className="bioBacNarrativeCard">
            <p className="bioBacSectionLabel">Observed Patterns</p>
            <h2>Data-heavy admin flows with quiet styling.</h2>
            <p>
              Across the screenshots, the product is driven by tables, forms,
              side navigation, and direct actions like export, filter, add, and
              complete sale.
            </p>

            <ul className="bioBacChecklist">
              {BIOBAC_CHECKLIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="bioBacVisualSide">
          <div className="bioBacVisualPanel">
            <div className="bioBacChromeBar">
              <div className="bioBacChromeLeft">
                <span className="bioBacChromeMenu" />
                <span className="bioBacChromeBack">Назад</span>
              </div>
              <div className="bioBacChromeRight">
                <span className="bioBacChromeFlag" />
                <span className="bioBacChromeAvatar" />
              </div>
            </div>

            <div className="bioBacWorkspace">
              <aside className="bioBacMiniSidebar">
                <p className="bioBacSidebarBrand">BioBac</p>

                <div className="bioBacSidebarList">
                  {BIOBAC_SIDEBAR_ITEMS.map((item) => (
                    <div key={item} className="bioBacSidebarItem">
                      <span className="bioBacSidebarDot" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="bioBacPreviewStack">
                <article className="bioBacScreenCard bioBacScreenCardTable">
                  <div className="bioBacScreenHead">
                    <div>
                      <p className="bioBacScreenLabel">Список</p>
                      <h3>Контактные лица</h3>
                    </div>

                    <div className="bioBacScreenActions">
                      <span>Excel</span>
                      <span>Фильтр</span>
                      <strong>+</strong>
                    </div>
                  </div>

                  <div className="bioBacTablePreview">
                    <div className="bioBacTableColumns">
                      {BIOBAC_TABLE_COLUMNS.map((column) => (
                        <span key={column}>{column}</span>
                      ))}
                    </div>

                    <div className="bioBacTableRows">
                      {BIOBAC_TABLE_ROWS.map((row) => (
                        <div key={row.email} className="bioBacTableRow">
                          <span>{row.name}</span>
                          <span>{row.role}</span>
                          <span>{row.phone}</span>
                          <span>{row.email}</span>
                          <span className="bioBacActionPair">
                            <i />
                            <i />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>

                <div className="bioBacBottomGrid">
                  <article className="bioBacScreenCard bioBacScreenCardForm">
                    <div className="bioBacScreenHead bioBacScreenHeadCompact">
                      <div>
                        <p className="bioBacScreenLabel">Продажи</p>
                        <h3>Сделать продажа</h3>
                      </div>
                    </div>

                    <div className="bioBacFormGrid">
                      {BIOBAC_FORM_FIELDS.map((field) => (
                        <div key={field} className="bioBacField">
                          <label>{field}</label>
                          <span />
                        </div>
                      ))}
                    </div>
                  </article>

                  <article className="bioBacScreenCard bioBacScreenCardCatalog">
                    <div className="bioBacScreenHead bioBacScreenHeadCompact">
                      <div>
                        <p className="bioBacScreenLabel">Каталог</p>
                        <h3>Продукты</h3>
                      </div>
                    </div>

                    <div className="bioBacCatalogRows">
                      {BIOBAC_PRODUCTS.map((item) => (
                        <div key={item.sku} className="bioBacCatalogRow">
                          <strong>{item.sku}</strong>
                          <span>{item.group}</span>
                          <em>{item.date}</em>
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
