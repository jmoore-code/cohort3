import cantax
import pytest

def test_taxCalculator():
    assert cantax.taxCalculator(2) == 0.3
    assert cantax.taxCalculator(47630) == 7144.5
    assert cantax.taxCalculator(50000) == 7630.35
    assert cantax.taxCalculator(95259) == 16908.445
    assert cantax.taxCalculator(100000) == 18141.105
    assert cantax.taxCalculator(147667) == 30534.525
    assert cantax.taxCalculator(150000) == 31211.095
    assert cantax.taxCalculator(210371) == 48718.685
    assert cantax.taxCalculator(250000) == 61796.255