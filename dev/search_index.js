var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = WilliamsonTransforms","category":"page"},{"location":"#WilliamsonTransforms","page":"Home","title":"WilliamsonTransforms","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for WilliamsonTransforms.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [WilliamsonTransforms]","category":"page"},{"location":"#WilliamsonTransforms.WilliamsonTransforms","page":"Home","title":"WilliamsonTransforms.WilliamsonTransforms","text":"WilliamsonTransforms.jl\n\n(Image: Stable) (Image: Dev) (Image: Build Status) (Image: Coverage)\n\nThis rather simple Julia package of code provides an implementation of the Williamson d-transform and of its inverse. \n\nDo not hesitate to open an issue and talk if you are interested.\n\nSee the following references and the documentation of the package for the definition and motivations of this (rather unknown) transformation:\n\n@book{williamson1955multiply,\n  title={On multiply monotone functions and their laplace transforms},\n  author={Williamson, Richard Edmund},\n  year={1955},\n  publisher={Mathematics Division, Office of Scientific Research, US Air Force}\n}\n@article{mcneil2009multivariate,\n  title={Multivariate Archimedean copulas, d-monotone functions and ℓ 1-norm symmetric distributions},\n  author={McNeil, Alexander J and Ne{\\v{s}}lehov{\\'a}, Johanna},\n  year={2009}\n}\n@article{mcneil2010archimedean,\n  title={From archimedean to liouville copulas},\n  author={McNeil, Alexander J and Ne{\\v{s}}lehov{\\'a}, Johanna},\n  journal={Journal of Multivariate Analysis},\n  volume={101},\n  number={8},\n  pages={1772--1790},\n  year={2010},\n  publisher={Elsevier}\n}\n@book{durante2015principles,\n  title={Principles of copula theory},\n  author={Durante, Fabrizio and Sempi, Carlo},\n  year={2015},\n  publisher={CRC press}\n}\n\n\n\n\n\n","category":"module"},{"location":"#WilliamsonTransforms.𝒲","page":"Home","title":"WilliamsonTransforms.𝒲","text":"𝒲(X,d)(x)\n\nComputes the Williamson d-transform of the random variable X, taken at point x.\n\nFor a univariate non-negative random variable X, with cumulative distribution function F and an integer dge 2, the Williamson-d-transform of X is the real function supported on 0infty given by:\n\nphi(t) = 𝒲_d(X)(t) = int_t^infty left(1 - fractxright)^d-1 dF(x) = mathbb Eleft( (1 - fractX)^d-1_+right) mathbb 1_t  0 + left(1 - F(0)right)mathbb 1_t 0\n\nThis function has several properties:      - We have that phi(0) = 1 and phi(Inf) = 0     - phi is d-2 times derivable, and the signs of its derivatives alternates : forall k in 0d-2 (-1)^k phi^(k) ge 0.     - phi^(d-2) is convex.\n\nThese properties makes this function what is called an archimedean generator, able to generate archimedean copulas in dimensions up to d. \n\nReferences: \n\nWilliamson, R. E. (1956). Multiply monotone functions and their Laplace transforms. Duke Math. J. 23 189–207. MR0077581\nMcNeil, Alexander J., and Johanna Nešlehová. \"Multivariate Archimedean copulas, d-monotone functions and ℓ 1-norm symmetric distributions.\" (2009): 3059-3097.\n\n\n\n\n\n","category":"type"},{"location":"#WilliamsonTransforms.𝒲₋₁","page":"Home","title":"WilliamsonTransforms.𝒲₋₁","text":"𝒲₋₁(ϕ,d)\n\nComputes the inverse Williamson d-transform of the d-monotone archimedean generator ϕ. \n\nA d-monotone archimedean generator is a function phi on mathbb R_+ that has these three properties:\n\nphi(0) = 1 and phi(Inf) = 0\nphi is d-2 times derivable, and the signs of its derivatives alternates : forall k in 0d-2 (-1)^k phi^(k) ge 0.\nphi^(d-2) is convex.\n\nFor such a function phi, the inverse Williamson-d-transform of phi is the cumulative distribution function F of a non-negative random variable X, defined by : \n\nF(x) = 𝒲_d^-1(phi)(x) = 1 - frac(-x)^d-1 phi_+^(d-1)(x)k - sum_k=0^d-2 frac(-x)^k phi^(k)(x)k\n\nWe return this cumulative distribution function in the form of the corresponding random variable <:Distributions.ContinuousUnivariateDistribution from Distributions.jl. You may then compute :      - The cdf via Distributions.cdf     - The pdf via Distributions.pdf and the logpdf via Distributions.logpdf     - Samples from the distribution via rand(X,n)\n\nReferences:      - Williamson, R. E. (1956). Multiply monotone functions and their Laplace transforms. Duke Math. J. 23 189–207. MR0077581     - McNeil, Alexander J., and Johanna Nešlehová. \"Multivariate Archimedean copulas, d-monotone functions and ℓ 1-norm symmetric distributions.\" (2009): 3059-3097.\n\n\n\n\n\n","category":"type"}]
}
