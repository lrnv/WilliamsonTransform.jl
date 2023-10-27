var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = WilliamsonTransforms","category":"page"},{"location":"#WilliamsonTransforms","page":"Home","title":"WilliamsonTransforms","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for WilliamsonTransforms.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [WilliamsonTransforms]","category":"page"},{"location":"#WilliamsonTransforms.𝒲","page":"Home","title":"WilliamsonTransforms.𝒲","text":"𝒲(X,d)(x)\n\nComputes the Williamson d-transform of the random variable X, taken at point x, as described in \n\nWilliamson, R. E. (1956). Multiply monotone functions and their Laplace transforms. Duke Math. J. 23 189–207. MR0077581\n\nand used in \n\nMcNeil, Alexander J., and Johanna Nešlehová. \"Multivariate Archimedean copulas, d-monotone functions and ℓ 1-norm symmetric distributions.\" (2009): 3059-3097.\n\nFor a univariate non-negative random variable X for distribution function F and dge 2 and integer, the williamson-d-transform of X is the real function supported on 0infty given by:\n\n𝒲_Xd(x) = int_x^infty left(1 - fracxtright)^d-1 dF(t) = mathbb Eleft( (1 - fracxX)^d-1_+right) mathbb 1_x  0 + left(1 - F(0)right)mathbb 1_x 0\n\n\n\n\n\n","category":"type"},{"location":"#WilliamsonTransforms.taylor-NTuple{4, Any}","page":"Home","title":"WilliamsonTransforms.taylor","text":"𝒲₋₁(ϕ,d)\n\nComputes the inverse Williamson d-transform of the d-monotone archimedean generator ϕ. This inverse is a CDF, and we return it on the form of a random variable <:Distributions.ContinuousUnivariateDistribution from Distributions.jl. The result can be sampled through Distributions.rand(). See \n\nWilliamson, R. E. (1956). Multiply monotone functions and their Laplace transforms. Duke Math. J. 23 189–207. MR0077581\n\nand moreover\n\nMcNeil, Alexander J., and Johanna Nešlehová. \"Multivariate Archimedean copulas, d-monotone functions and ℓ 1-norm symmetric distributions.\" (2009): 3059-3097.\n\nfor details. \n\nThe cumulative distribution function of this random variable is given by:\n\n𝒲₁(Xd)(x) = 1 - frac(-x)^d-1 phi_+^(d-1)(x)k - sum_k=0^d-2 frac(-x)^k phi^(k)(x)k\n\n\n\n\n\n","category":"method"}]
}
