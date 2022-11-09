# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

1) Test cases are written in teh dpk.test.js file
2) The function is refactored 
3) First I initialized the candiate with TRIVIAL_PARTITION_KEY for default constraint.
Then I removed the unnecessary if condition for candiate variable which is shorten to check if canidate exists and it's value is not string. The purpose to make it readable by doing some kind of removing the 
unnecessary conditions from the code. the current code is much easier than the previous one.
