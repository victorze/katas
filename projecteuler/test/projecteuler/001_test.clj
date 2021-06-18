(ns projecteuler.001-test
  (:require [clojure.test :refer :all]
            [projecteuler.001 :refer :all]))


(deftest sum-multiples-test
  (testing "below 10"
    (is (= 23 (sum-multiples 10))))

  (testing "below 1000"
    (is (= 233168 (sum-multiples 1000)))))
