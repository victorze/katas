(ns projecteuler.001)


; Multiples of 3 and 5
; https://projecteuler.net/problem=1
(defn sum-multiples [below]
  (apply +
    (filter
      #(or (zero? (mod % 3)) (zero? (mod % 5)))
      (range 1 below))))
