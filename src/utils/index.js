export const BRAZIL_STATES = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
  Brazil: 'Brasil',
};

export const getLastRtValue = (data = {}, id = '') =>
  data?.[id]?.[data[id].length - 1]?.y.toFixed(1);

export const formatListData = ({ data }) => {
  return data?.reduce((current, next) => {
    const [id, , y, low, high] = next;
    const index = (current[id] || []).length;

    return {
      ...current,
      [id]: (current[id] || []).concat({
        id,
        state: id,
        x: index,
        y,
        low,
        high,
      }),
    };
  }, {});
};

export const formatBarChartData = (data) => {
  const formattedData = formatListData(data);
  return Object.keys(formattedData).map((k) => data[k][data[k].length - 1]);
};
