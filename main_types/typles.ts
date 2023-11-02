//TypeScript: Кортежи (Tuples) кортежи обеспечивают
// хранение множественных полей различных типов. Кортежи могут быт также переданы функциям в качестве параметров.

const skills1: [number, string]= [1, 'Dev'];

const [id, skillName] = skills1;

const arrTuples: [number, string, ...boolean[]] = [1, 'sdf', true, true, false]

//------------------------------Readonly---------------------------------------*
//помечать отдельные элементы интерфейса доступными только для чтения

const skills2: readonly [number, string]= [1, 'Dev'];
const skills3: readonly string[] = ['DevOps', 'Dev'];





