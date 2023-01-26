
import React from 'react'

const ICSData = [
  {
    id: "classes",
    title: "Classes",
    image: require("../pictures/ClassesModal.png") ,
    subtitle1: "Python Classes",
    description1:
    "A class is a blueprint defined by the user, from which objects are created from. Classes allow for the user to bundle data with functionality. Creating a new class creates a new type of object, allowing new instances of that type to be created. Each class instance can have attributes attached to it, that maintains its state. Classes are created by the keyword class, white attributes are the variables that belong to said class. Attributes in Python are always public and can be accessed using the dot (.) operator. For example MyClass.myAttribute",
    subtitle2: "The Self Method",
    description2:
    "Class methods must have an extra parameter at the start of the method. We do not give this parameter a value, Python will automatically provide it. If we have a method that takes no arguments, we still have this one argument. This is similar to the pointer inC++ and this reference in Java, and refers to attributes of the object itself.",
    subtitle3: "The __init__ Method",
    description3:
      "The __init__ method is similar to constructors in C++ and Java. This method is called every time an object is created from said class and it serves to initialize the object and assign all parameters to attributes of the object. ",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code Example",
    codeexample1: "This example is of the Squirtle class that defines the Squirtle object. As such, an object consists of two main parts, attributes and methods, which inherits the properties of its parent class Pokemon. The class is defined on line 4 by the squirtle keyword. Then, the __init__ function, located after the documentation, initializes the squirtle Class as Python. The __init__ function, defined from line 28 to line 39 function initializes all attributes from the Squirtle class, inheriting from the parent class and defining a few new attributes. Next, the __str__ function, defined from line 54 to 62 defines how to represent the Squirtle object as a string. It combines the squirtle, level, and name into one string and returns it. After the __str__ function is the __repr__ function, defined from line 64 to 96. This function defines how the Squirtle is represented as an object. Finally, the final fundamental property of a Class is its methods. For example, the attack methods that are defined from lines 64 to 96. It returns the damage done by the default attack. These attack methods multiply the base damage of the attack by the attack strength of the Squirtle object, an attribute defined in its parent Class. ",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "documentation-ds",
    title: "Python Documentation",
    image: require("../pictures/ClassesModal.png") ,
    subtitle1: "Comments",
    description1:
        "Comments in Python are created using the pound sign (#). The comment should be a brief description of at most a few sentences. According to PEP 8, comments should have a maximum length of 72 characters. If a comment is going to be greater than the character limit, using multiple lines of commenting is appropriate. Commenting serves many purposes such as planning and reviewing code descriptions, algorithmic descriptions, and tagging (the use of labelling specific sections of the code such as BUG, FIXME, and TODO).",
    subtitle2: "Docstrings - Classes",
    description2:
    "The class docstrings are created for the class itself, as well as the methods in the class. The docstrings are placed immediately following the class and method indented by one level. The class docstring should contain. \n\n A brief summary of its purpose and behavior: \n - Any public methods, along with a brief description. \n - Any class attributes. \n - Anything related to the interface for subclassers, if the class is intended to be subclassed",
    subtitle3: "Docstrings - Methods",
    description3:
        "The class constructor parameter should be documented within the __init__ class method docstring, while individual methods should be documented with their individual docstrings. Class method docstrings should include. \n\n A brief description of what the method is and what it’s used for: \n - Any arguments (both required and optional) that are passed including keyword arguments \n - Label any arguments that are considered optional or have a default value \n - Any side effects that occur when executing the method \n - Any exceptions that are raised \n - Any restrictions on when the method can be called",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
        "",
    code1: "Code Example",
    codeexample1: "Inside of the squirtle class, the first thing that is seen is the documentation. The documentation spans from line 5 to line 27 and follows the standard Python Docstrings for classes and methods. The Docstring for classes contains a summary of the class, the meaning and data type of its attributes, and the function and return types of the methods. Furthermore, the documentation of each method further details its function, parameters, and return value.",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "file-reading-and-writing",
    title: "File Reading and Writing",
    image: require("../pictures/FileReadingAndWritingModal.png") ,
    subtitle1: "What is a JSON File",
    description1:
      "JSON stands for Javascript Object Notation. It is an executable script file, made up of text in a programming language, and it is often used to store and retrieve data. Python supports JSON through its built-in JSON package. To use this feature, we must import the json package in the Python script. The text in the JSON is done through quoted-strings, which contains the value in key-value mapping within the { }. Its format is similar to a dictionary in Python.",
    subtitle2: "Reading to a JSON ",
    description2:
    "To read from a JSON file, the Python JSON package includes the json.load() function that loads the JSON content from a file into a dictionary. This function takes one parameter, a file pointer that points to the JSON file",
    subtitle3: "Writing to a JSON File",
    description3:
    "To handle data flow, the JSON library in Python uses the dump() or dumps() method, which converts the Python object into its respective JSON format, and writes it as data into files. The dumps() method takes on two parameters, dictionary (the name of the dictionary that should be converted to a JSON object) and indent (the number of units for indentation). After converting the dictionary into a JSON object, simply use the write function to write it into a file",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code Example",
    codeexample1: "Defined from line 108 to 124, the writeSquirtleStatus method applies file reading and writing, passing in the data into json.dumps function to turn the data into json format, then it opens the data file using with open() function, and writes it as the json object into the Pokemon.json json file.",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "object-concepts",
    image: require("../pictures/InheritanceModal.png") ,
    subtitle1: "Inheritance",
    description1:
      "Inheritance allows for us to define a class that inherits all the methods and attributes of another class. The parent class is the class being inherited from, also known as the base class. While the child class is the class that inherits from another class, also known as the derived class. To create a class that inherits the functionality from another class, the parent class is sent in as a parameter while creating the first class. Furthermore, Python has the super() function, to automatically inherit the methods and properties of its parent class.",
    subtitle2: "Abstract Classes",
    description2:
      "Python by default does not provide abstract classes. Python comes with a module that provides the base for defining an Abstract Base Class (ABC), the module also being named ABC. It works by decorating the methods of the base class as abstract with the @abstractmethod decorator, and registers the concrete classes as implementations of the abstract base. By defining the abstract base class, you can define an Application Programming Interface (API) for a set of subclasses. This is useful in situations where a third-party is going to provide implementations, and can also help when working in large teams where keeping all classes in mind is extremely difficult",
    subtitle3: "Polymorphism",
    description3:
    "Polymorphism literally means “many forms.” It refers to the use of a single type entity (method, operator) to represent many types in different scenarios. This is because a child class inherits all the methods from the parent class. However, in some situations, the method inherited from the parent class doesn’t quite fit into the child class. In such cases, you will have to re-implement methods in the child class.",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code exammple - Inheritance",
    codeexample1:"Inside of the __init__ function, contains a super()  function that passes its attributes and allows access to methods and properties of its parent class: Pokemon. After the super function, it initializes its own attributes. ",
    code2: "Code example - Abstract Classes",
    codeexample2: "Line 1 imports the abstract class and abstract method, this allows for the use of abstract classes, while line 3 declares the Pokemon as an abstract class from inheriting ABC, which allows for the use of abstract methods. On line 106, the abstract method decorator is used to declare an abstract method. These methods cannot be instantiated, instead, they are declared by their subclasses.",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "uml-diagrams",
    title: "UML Diagrams",
    image: require("../pictures/UMLDiagrams.png")  ,
    subtitle1: "What is a UML Diagram?",
    description1:
      "The Unified Modeling Language (UML) diagram is a way to visually represent the architecture and design of complex software systems. It is when collaborating with others, as well as organizing the many relationships and hierarchies inside of the system. In this UML Diagram, I will be focusing on classes and their relationships with each other. ",
    subtitle2: "UML Class Diagrams",
    description2:
    "A single class in an UML Class Diagram consists of three sections, the class name, instance variables, and methods. The first section is the name of the class, the second section outlines the instance variables as well as their data types and default values if applicable. The third section consists of the various methods the class contains, denoting their parameters and parameter types for each method, as well as their return types. Furthermore, a relationship between two classes can be illustrated through a symbol that connects two classes. A line with a solid-diamond symbolizes a composition, also known as a “Has a” relationship, while the line with the open arrow denotes a “IS a” relationship (inheritance). Finally, composition can be detonated with number that determines the number of instances that can exists at the end of the composition line, and symbols such as +, -, and # denote a public, private, and protected variable/method respectively.",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Example of UML Diagram",
    codeexample1: "The figure above is the UML Diagram used for the extending data structures assignment. As you can see, there are 7 classes. For starters, all of these classes have three sections, a name, their attributes, and their methods. The name contains the name, while their attributes contain whether it’s public, private, or protected, the name of the attribute, and the data type of the attribute, while the method contains the method status, name, and return type. Furthermore the relationship between the Pokedex, PokemonInfo, and Stats class are apparent. The Pokedex “has” PokemonInfo, while the Pokemon has “has” contains stats of the Pokemon. Moreover, the Pokemon class, which is an abstract class containing abstract methods, is the parent class to three children classes: the squirtle class, the charmander class, and the bulbasaur class. As you can see, all the objects and their relationships can be neatly expressed using a UML Class Diagram.",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id:"results",
    title: "Results",
    image: require("../pictures/ResultsModal.png"),
    subtitle1: "Expectations vs Reality",
    description1:
      "The trend of the graph generally aligns with the expected theoretical versions of the graph, this would make sense because the time complexity of these algorithms are constant, and therefore as values get very large, anomalies are expected to be drowned out, and a general trend is expected to be shown. This is generally the case, shown in the graphs as they have similar trends to the expected trends. For example, the linear search cases are relatively linear, while the selective sort cases increase exponentially, just like its expected case. However, it is also observed that most of the derived “Worst Case” graphs were strangely faster than a lot of the actual times observed. This is most apparent in the “Binary Search Cases” graph, which has the theoretical worst case as the case with the fastest run times. This is likely due to the inaccuracy of the derived formula added onto the inconsistency of my desktops performance speed. For starters, the formula to calculate expected time is based on the lines/curves of best fit for the “Worst Case” graph. This assumes that the “Worst Case” graphs are accurate and consistent to the other graphs, which may not always be the case. This is due to the inconsistent performance speed of my desktop which can be impacted by a variety of things such as CPU and memory usage.",
    subtitle2: "Explanation for Anomalies",
    description2:
    "There were many anomalies inside of my graph. Little to no anomalies contain the computer finishing calculations much faster than usual, but there were quite a few cases where the computer finished much slower than expected. This is because there are little to no reasons that may suddenly speed up a computer's calculation speed as almost all apps and tabs were constant during this process, but there are a multitude of reasons that may have significantly slowed the calculation speed. For example, during the Selection Sort cases with 125,000 and 150,000 items, there are numerous anomalies that double the usual time it takes to finish its calculations. This is likely due to the overuse of the CPU and memory. For starters, running my desktop overnight will cause it to overheat, which in turn decreases its clock rate and slows down its performance, ultimately decreasing the speed of the calculations. Furthermore, running Python overnight could have eaten away at my desktops memory which also causes the computer to malfunction and freeze. Finally, although I tried to keep the applications running to a minimum to maximize the speed and consistency, as the desktop did not shut down, the amount of applications running in the background may have slowly stacked up and eventually began to use up a significant portion of the CPU, decreasing the calculation speed of the program. In fact, at one point my computer was so slow that it was difficult to navigate Pycharm, and it had to be restarted to continue running at an adequate speed. ",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "",
    codeexample1: "",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    image: require("../pictures/SortingAlgModal.png") ,
    subtitle1: "Selection Sort",
    description1:
      "The selection sort is a sorting algorithm that sorts an array by repeatedly finding the minimum element from the unsorted part. The algorithm maintains two subarrays, the subarray already sorted and the remaining unsorted subarray. In every iteration of the selection sort, the minimum element is picked and moved to the sorted subarray, and the sorted array size increases by one. ",
    subtitle2: "Bubble Sort",
    description2:
    "Bubble sort is a sorting algorithm that works through the input list element by element, comparing the current element to the one after it and swapping the values if necessary. This continues until it reaches the end of the list, and the swapping starts back at the beginning. This continues until there are no swaps, which means the list is completely sorted.",
    subtitle3: "Tim Sort",
    description3:
      "Timsort is a hybrid sorting algorithm, consisting of a combination of merge sort and insertion sort, designed to change sorting algorithms depending on the size of the data set. It was created by Tim Peters, and is the sorting algorithm utilized in Python.",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code Example - Selection Sort",
    codeexample1: "Selection sort is defined from line 27 to line 36 and the function is used on line 93 and 149. On line 27, the function is defined, taking in an array as its parameter. Then, selection sort will create a for loop to track how far the array has been sorted, and a second for loop to actually find the minimum element in the array during every round of sorting. Of which, the selected element will be compared with other elements until the minimum element is found (when the array ends), then the minimum element is replaced to its respective order on the sorted list. ",
    code2: "Code Example - Tim Sort",
    codeexample2: "Tim sort is Python’s built in sorting algorithm. It is significantly more efficient than selection sort, and it can be accessed using the sorted() function, while the key parameter specifies the value each item in the list is sorted by. An example where this is utilized is line 142, in my case it is specified to be sorted by the level of the squirtle.",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "searching-algorithms",
    title: "Searching Algorithms",
    image: require("../pictures/SearchingAlgModal.png") ,
    subtitle1: "Linear Search",
    description1:
      "Linear search is a searching algorithm that starts from the leftmost element in the array and one by one compares the value it is searching for to every element of the array. If the value is matched by an element in the array, it returns the index otherwise it returns -1 to show there are no matches",
    subtitle2: "Binary Search",
    description2:
    "The binary search is a searching algorithm that requires the searched array to be sorted, and it cancels out half of the elements after each comparison. First, the value to be searched is compared with the middle element. If it matches, it returns the index, else if the value is greater than the middle element, the same searching pattern is applied to the right half of the array. If the value is less than the middle element, the left half of the array is cut in half. This repeats until the element is either found or -1 is returned, meaning that the element is not in the array.",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code Example - Linear Search",
    codeexample1: "Linear search is defined from line 6 to line 12, and the function is used on line 101, 135, and 157. On line 6, the function is defined, taking an array and a target as its parameter. The array is the array to be searched while the target is the target to be searched for in the array.  Linear search defines a for loop that cycles through the whole array, checking if each index is equivalent to the target. If it is, it returns the index of the target in the array, and if it doesn’t (the loop finishes and nothing is found), it returns -1. ",
    code2: "Code Example - Binary Search",
    codeexample2:"Binary search, a searching algorithm that only works for sorted arrays, is defined from line 14 to line 25, and the function is used on line 165 and 109. On line 14, binary search is defined with, taking an array to be searched and a target to be searched for as its parameters. Binary search starts in the middle of the array and compares to see if the target value is higher or lower than the middle value. If it is higher, then it will cut the array in half from the top half, and if it is lower, it will divide the array from the bottom half. This will continue until the target is found, in which the index of the target is returned, or if the binary search does not find the target after searching the whole array, returning -1.",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "recursion",
    title: "Recursion",
    image: require("../pictures/RecursionModal.png"),
    subtitle1: "What is Recursion?",
    description1:
      "The process of recursion is known as when a function directly or indirectly calls itself, a function that does this is known as a recursive function. While a for loop is used to solve problems with known amounts of looping times, a recursive function solves a problem that has unknown amount of looping times, and will only stop calling itself after a condition has been met, this condition is known as its base condition. When running a recursive function, the set of operations rules are constant, but the inputs are always changing, and the input usually decreases every step to make the problem smaller. A basic use of a recursive function is factorial, where it multiplies itself by itself subtract by 1 and keeps calling the function until the value being multiplied reaches one. ",
    subtitle2: "Pitfalls of Recursion",
    description2:
    "While recursive algorithms are extremely powerful, there are many common pitfalls of recursion that one needs to be aware of while using recursive functions. For starters, if the base condition consists of loopholes, the recursive function could undergo an infinite recursive loop, where the base condition is never reached and the recursive function calls itself forever. This can completely crash your program, and on a large scale can result in disastrous outcomes. Furthermore, recursive functions take up a significant amount of memory, which scales significantly as the input increases. Similarly to memory, the time complexity of recursive functions can also become extremely inefficient as the input scales. However, this can be somewhat mitigated through optimization techniques such as memoization, which will also be covered on this website.",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code Example - Recursion",
    codeexample1: "The purpose of this recursive program is to find the least amount of days it will take to eat N oranges, with various possible paths that can be taken. My recursive program is defined from line 11 to 38, but the start of the recursive function is defined from line 13 to line 38, where searchDays is defined. From line 20 to line 21 is where the actual recursion occurs, wheen the two methods of eating oranges are both attempted (called recurisvely). The recursive function repeats calling itself until the function reaches its base condition, and the smaller value is compared and taken each time. This happens until the “minimum” value is reached and returned. ",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "memoization",
    title: "Memoization",
    image: require("../pictures/MemoizationModal.png"),
    subtitle1: "What is Memoization?",
    description1:
      "Memoization is an optimization technique made to increase the efficiency of recursive programs. It works by declaring a temporary data holder, known as a cache, which is usually a dictionary in Python, and checking before the recursive algorithm begins if the value is in the cache (if the value has previously been calculated). If the value is not in the cache, after calculating the value the recursive algorithm will add it into the cache so next time when the same value appears you can retrieve it directly from the cache.",
    subtitle2: "",
    description2:
    "",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "Code Example - Memoization",
    codeexample1: "This recursive algorithm is defined from line 11 to line 38. However, the memoization aspect is only defined from line 12 to 17, and at line 38. Firstly, the outer function is defined, and afterwards the cache used for memoization is defined. This is known as encapsulation, and prevents global variables, increasing security by restricting access to the cache. On line 13, the actual recursive function is defined. Then, on line 15, it checks if the input is in the cache, if it is, it will automatically return the previously calculated value. This way, the recursive program will only have to calculate each value a single time, as all values calculated will then be stored in the cache. This is demonstrated on line 35, where the newly calculated value is stored in the cache with the key being the input, and the value being the calculated value. Therefore, next time that value is inputted into the recursive function, its key will be recognized and the previously calculated value will be outputted, saving time.",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "visualization-of-recursion",
    title: "Visualization of Recursion",
    image: require("../pictures/Recursion.png")  ,
    subtitle1: "Explanation of Visual",
    description1:
      "In this visualization of recursion, I am attempting to portray a first time runthrough of my program, with an input value of 10. Basically, the program starts off by checking if the input value, in this case 10, has already previously been cached into the dictionary, represented by the curly brackets. If it is cached, it will return the previously calculated value, otherwise, it will attempt both options using recursion. In this case, as it is a first time runthrough, 10 has not been cached and the two options will be recursively called. One for the minimum number of days it would take to eat two thirds of the oranges, and one for the minimum number of days it would take to eat half of the oranges. In the image, the oranges are represented with orange circles, the orange outlines represent missing oranges, and the blue circles represent the recursive path taken. First, the recursive function will find the minimum number of days it will take to eat half of the oranges. For this, we will have to add the remainder by taking the modulus of 2, and adding one for the day of eating half of the oranges. Finally, we recall the recursive function, where the input is half of the oranges left, to calculate the minimum number of days it will take to eat the remaining oranges. The same process occurs when eating two thirds of the oranges, and when the recursive function reaches its base condition as shown in the bottom of the image where one orange is found in the cache, and it returns one. Then, it will slowly come back up the recursive route, comparing the two options and taking the one with the minimum number of days, shown by the long black line, that represents a scale that takes the lighter route (the route with less days). This continues until it ultimately reaches the top, where it is cached into the dictionary.",
    subtitle2: "",
    description2:
    "",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "",
    codeexample1: "",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "documentation-hop-queen",
    title: "Documentation - Hop Queen",
    image: require("../pictures/HopQueenDocumentationModal.png"),
    subtitle1: "C# documentation",
    description1:
      "In Visual C# you can create documentation for your code by including XML tags in special comment fields in the source code directly before the code block they refer to. or example: The compiler will process any tag that is valid XML. The following tags provide generally used functionality in user documentation. Note: The XML doc comments are not metadata; they are not included in the compiled assembly and therefore they are not accessible through reflection.",
    subtitle2: "Code Example",
    description2:
    "Here is an example of the documented C# code. As you can see, the documentation spans from line 7 to line 24. One line 7, the <summary> tag was first used. The <summary> tag is used to denote classes, and methods, used to detail a brief summary on the functionalities of the class and methods. Additionally, on line 24, the <param> tag was used to denote a parameter of a method, which contained the name of the parameter, as well as the type of the parameter. Comments are also added to clarify further clarify the functionality of certain lines of code",
    subtitle3: "",
    description3:
      "",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "",
    codeexample1: "",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
  {
    id: "download",
    title: "Download",
    image: require("../pictures/HopQueenModal.png") ,
    subtitle1: "Download the Game",
    description1:
    "Step 1. Download UnityHub and Unity to run the game \n Step 2. Register for a Unity License \n Step 3. Clone this Github Repository using the terminal \n Step 4. Open the cloned file as a project in UnityHub, and run Unity",
    subtitle2: "Run the Game",
    description2: "Step 5. Click on Window > General > Project located on the top toolbar of the screen to open the project window \n Step 6. Now that the project window is open, click on Assets > Scenes and click on any of scenes to open them! \n Step 7. Click on the play button to run the scene! Press ESC to navigate to the main menu",
    subtitle3: "Edit the Game",
    description3:
    "Step 8. Download Visual Studio to add to the scripts and download Github Desktop for source control \n Step 9. Create a new repository on GithubStep \n Step 10. Connect the cloned project to the Github repository \n Step 11. Click Window > General > Hierachy located on the top toolbar of the screen to access the object hierachy \nStep 12. Right click the object hierachy to add Game Objects \n Step 13. Existing scripts can be found in Assets > Scripts, new and current scripts can be edited on Visual Studio \n Step 14. Commit to Github repository, add a commit message and push the changes to the repository.",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
    code1: "",
    codeexample1: "",
    code2: "",
    codeexample2:"",
    code3: "",
    codeexample3: "",
    code4: "",
    codeexample4: "",
  },
];

export default ICSData;


