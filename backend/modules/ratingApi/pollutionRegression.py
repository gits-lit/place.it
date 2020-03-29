intercept_ = 39.50294435044748
coef1_ = 0.003417097532735685

def pollution_prediction(square_footage):
    return coef_ * square_footage + intercept_
    
    