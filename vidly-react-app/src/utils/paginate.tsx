import * as _ from "lodash";
import { IMovie } from "../modules";

export function paginate(
  items: IMovie[],
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
