import census_reader
import pytest

def test_censusReader():
    retVal = census_reader.census_reader("test_csv.csv")
    assert retVal["CLASS"] == {"Residential": 2, "Park": 4, "Industrial": 6}
    assert retVal["SECTOR"] == {"CENTRE": 2, "SOUTHEAST": 4, "NORTHWEST": 6}

def test_censusWriter():
    retVal = census_reader.census_writer()
    assert retVal == {'Residential': 2, 'Park': 4, 'Industrial': 6, 'CENTRE': 2, 'SOUTHEAST': 4, 'NORTHWEST': 6}