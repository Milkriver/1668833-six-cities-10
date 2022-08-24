import { useState } from 'react';
import { sortOptionList } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortOption } from '../../store/offer-process/offer-process';
import { selectSortOption } from '../../store/offer-process/selectors';
import { Offer } from '../../types/offer';
import { sortOfferList } from '../../utils';

type Props = {
  offers: Offer[];
};


function SortOptionList({ offers }: Props): JSX.Element {
  const [isSortMenuOpened, setIsSortMenuOpened] = useState(false);
  const selectedSortOption = useAppSelector(selectSortOption);
  const dispatch = useAppDispatch();
  sortOfferList(selectedSortOption, offers);
  const openSortMenuHandler = () => {
    setIsSortMenuOpened(!isSortMenuOpened);
  };

  const onSortChangeHandler = (sortTab: string) => {
    dispatch(changeSortOption({ sortOption: sortTab }));
    openSortMenuHandler();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={openSortMenuHandler}>
        {selectedSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {
        isSortMenuOpened &&
          <ul className="places__options places__options--custom places__options--opened">
            {
              Object.values(sortOptionList).map((sortOption) => (
                <li
                  key={sortOption}
                  className={`places__option ${sortOption === selectedSortOption ? 'places__option--active' : ''}`}
                  onClick={() => onSortChangeHandler(sortOption)}
                >
                  {sortOption}
                </li>
              ))
            }
          </ul>
      }
    </form>
  );
}

export default SortOptionList;
