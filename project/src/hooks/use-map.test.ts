import {renderHook} from '@testing-library/react';
import React from 'react';
import {City} from '../types/offer';
import useMap from './use-map';


describe('Hook: useMap', () => {
  it('should return map', () => {
    const mockCity: City = {
      name: 'mockCity',
      location: {
        latitude: 48.8534,
        longitude: 2.3488,
        zoom: 13
      }
    };

    const divElement = document.createElement('div');
    jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: divElement });
    const uref = React.useRef(null);

    const {result} = renderHook(() =>
      useMap(uref, mockCity),
    );

    expect(result.current).toBeDefined();
    expect(result.current?.getCenter().lat).toBe(48.8534);
    expect(result.current?.getCenter().lng).toBe(2.3488);
  });
});
