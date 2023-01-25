
import React from 'react'

const ICSData = [
  {
    id: "classes",
    title: "Classes",
    image: "" ,
    subtitle1: "Python Classes",
    description1:
    "A class is a blueprint defined by the user, from which objects are created from. Classes allow for the user to bundle data with functionality. Creating a new class creates a new type of object, allowing new instances of that type to be created. Each class instance can have attributes attached to it, that maintains its state. Classes are created by the keyword class, white attributes are the variables that belong to said class. Attributes in Python are always public and can be accessed using the dot (.) operator. For example MyClass.myAttribute",
    subtitle2: "The Self Method",
    description2:
    "Class methods must have an extra parameter at the start of the method. We do not give this parameter a value, Python will automatically provide it. If we have a method that takes no arguments, we still have this one argument. This is similar to the pointer inC++ and this reference in Java, and refers to attributes of the object itself.",
    subtitle3: "The __init__ Method",
    description3:
      "The __init__ method is similar to constructors in C++ and Java. This method is called every time an object is created from said class and it serves to initialize the object and assign all parameters to attributes of the object. ",
    subtitle4: "Code Example + Explanation",
    description4:
    "This example is of the Squirtle class that defines the Squirtle object. As such, an object consists of two main parts, attributes and methods, which inherits the properties of its parent class Pokemon. The class is defined on line 4 by the squirtle keyword. Then, the __init__ function, located after the documentation, initializes the squirtle Class as Python. The __init__ function, defined from line 28 to line 39 function initializes all attributes from the Squirtle class, inheriting from the parent class and defining a few new attributes. Next, the __str__ function, defined from line 54 to 62 defines how to represent the Squirtle object as a string. It combines the squirtle, level, and name into one string and returns it. After the __str__ function is the __repr__ function, defined from line 64 to 96. This function defines how the Squirtle is represented as an object. Finally, the final fundamental property of a Class is its methods. For example, the attack methods that are defined from lines 64 to 96. It returns the damage done by the default attack. These attack methods multiply the base damage of the attack by the attack strength of the Squirtle object, an attribute defined in its parent Class.  ",
    subtitle5: "",
    description5:
      "",
  },
  {
    id: "documentation-ds",
    title: "Python Documentation",
    image: "InspiritAI.png" ,
    subtitle1: "Comments",
    description1:
        "Comments in Python are created using the pound sign (#). The comment should be a brief description of at most a few sentences. According to PEP 8, comments should have a maximum length of 72 characters. If a comment is going to be greater than the character limit, using multiple lines of commenting is appropriate. Commenting serves many purposes such as planning and reviewing code descriptions, algorithmic descriptions, and tagging (the use of labelling specific sections of the code such as BUG, FIXME, and TODO).",
    subtitle2: "Docstrings - Classes",
    description2:
    "The class docstrings are created for the class itself, as well as the methods in the class. The docstrings are placed immediately following the class and method indented by one level. The class docstring should contain. \n\n A brief summary of its purpose and behavior: \n - Any public methods, along with a brief description. \n - Any class attributes. \n - Anything related to the interface for subclassers, if the class is intended to be subclassed",
    subtitle3: "Docstrings - Methods",
    description3:
        "The class constructor parameter should be documented within the __init__ class method docstring, while individual methods should be documented with their individual docstrings. Class method docstrings should include. \n\n A brief description of what the method is and what it’s used for: \n - Any arguments (both required and optional) that are passed including keyword arguments \n - Label any arguments that are considered optional or have a default value \n - Any side effects that occur when executing the method \n - Any exceptions that are raised \n - Any restrictions on when the method can be called",
    subtitle4: "Code Example + Explanation",
    description4:
    "Inside of the squirtle class, the first thing that is seen is the documentation. The documentation spans from line 5 to line 27 and follows the standard Python Docstrings for classes and methods. The Docstring for classes contains a summary of the class, the meaning and data type of its attributes, and the function and return types of the methods. Furthermore, the documentation of each method further details its function, parameters, and return value.",
    subtitle5: "",
    description5:
        "",
  },
  {
    id: "file-reading-and-writing",
    title: "File Reading and Writing",
    image: "" ,
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
  },
  {
    id: "object-concepts",
    title: "Object Concepts",
    image: "" ,
    subtitle1: "Abstract Classes",
    description1:
      "Python by default does not provide abstract classes. Python comes with a module that provides the base for defining an Abstract Base Class (ABC), the module also being named ABC. It works by decorating the methods of the base class as abstract with the @abstractmethod decorator, and registers the concrete classes as implementations of the abstract base. By defining the abstract base class, you can define an Application Programming Interface (API) for a set of subclasses. This is useful in situations where a third-party is going to provide implementations, and can also help when working in large teams where keeping all classes in mind is extremely difficult",
    subtitle2: "Polymorphism",
    description2:
    "Polymorphism literally means “many forms.” It refers to the use of a single type entity (method, operator) to represent many types in different scenarios. This is because a child class inherits all the methods from the parent class. However, in some situations, the method inherited from the parent class doesn’t quite fit into the child class. In such cases, you will have to re-implement methods in the child class.",
    subtitle3: "Inheritance",
    description3:
      "Inheritance allows for us to define a class that inherits all the methods and attributes of another class. The parent class is the class being inherited from, also known as the base class. While the child class is the class that inherits from another class, also known as the derived class. To create a class that inherits the functionality from another class, the parent class is sent in as a parameter while creating the first class. Furthermore, Python has the super() function, to automatically inherit the methods and properties of its parent class.",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
  },
  {
    id: "uml-diagrams",
    title: "UML Diagrams",
    image: "" ,
    subtitle1: "",
    description1:
      "",
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
  },
  {
    id: "documentation-algorithms",
    title: "Python Documentation",
    image: "InspiritAI.png" ,
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
  },
  {
    id:"results",
    title: "Results",
    image: "" ,
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
  },
  {
    id: "sorting-algorithms",
    title: "Sorting Algorithms",
    image: "" ,
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
  },
  {
    id: "searching-algorithms",
    title: "Searching Algorithms",
    image: "" ,
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
  },
  {
    id: "documentation-recursions",
    title: "Python Documentation",
    image: "" ,
    subtitle1: "Commenting",
    description1:
      "Comments in Python are created using the pound sign (#). The comment should be a brief description of at most a few sentences. According to PEP 8, comments should have a maximum length of 72 characters. If a comment is going to be greater than the character limit, using multiple lines of commenting is appropriate. Commenting serves many purposes such as planning and reviewing code descriptions, algorithmic descriptions, and tagging (the use of labelling specific sections of the code such as BUG, FIXME, and TODO).",
    subtitle2: "Docstrings - Classes",
    description2:
    "The class docstrings are created for the class itself, as well as the methods in the class. The docstrings are placed immediately following the class and method indented by one level. The class docstring should contain \n\n A brief summary of its purpose and behavior \n - Any public methods, along with a brief description \n - Any class attributes \n - Anything related to the interface for subclassers, if the class is intended to be subclassed",
    subtitle3: "Docstrings - Methods",
    description3:
        "The class constructor parameter should be documented within the __init__ class method docstring, while individual methods should be documented with their individual docstrings. Class method docstrings should include. \n\n A brief description of what the method is and what it’s used for: \n - Any arguments (both required and optional) that are passed including keyword arguments \n - Label any arguments that are considered optional or have a default value \n - Any side effects that occur when executing the method \n - Any exceptions that are raised \n - Any restrictions on when the method can be called",
    subtitle4: "",
    description4:
    "",
    subtitle5: "",
    description5:
      "",
  },
  {
    id: "memoization",
    title: "Memoization",
    image: "" ,
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
  },
  {
    id: "visualization-of-recursion",
    title: "Visualization of Recursion",
    image: "" ,
    subtitle1: "",
    description1:
      "",
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
  },
  {
    id: "documentation-hop-queen",
    title: "Documentation - Hop Queen",
    image: "" ,
    subtitle1: "C# documentation",
    description1:
      "In Visual C# you can create documentation for your code by including XML tags in special comment fields in the source code directly before the code block they refer to. or example: The compiler will process any tag that is valid XML. The following tags provide generally used functionality in user documentation. Note: The XML doc comments are not metadata; they are not included in the compiled assembly and therefore they are not accessible through reflection.",
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
  },
  {
    id: "download",
    title: "Download",
    image: "",
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
  },
];

export default ICSData;


