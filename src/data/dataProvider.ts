import data from './spiewnik.json';
const dataObj: any = data.objects;

export const getTitles = (): any[] => {
  var titles = dataObj[1].rows;
  return titles;
};

export const getSongById = (id: number) => {
  const allTexts = dataObj[2].rows;
  const songText = allTexts.filter((item: any) => item[1] === id);
  return songText;
};

export const getIdsForSearchTitles = (searchPhrase: string): number[] => {
  var titles:any[] = dataObj[1].rows;
  searchPhrase = searchPhrase.toLowerCase();
  var filteredTitles:any[];
  filteredTitles = titles.filter((title) => (title[1] as String).toLowerCase().includes(searchPhrase));
  var titlesIds:number[] = [];
  filteredTitles.forEach((item) =>  titlesIds.push(item[0] as number));
  return titlesIds;
}

