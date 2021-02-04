# JavaScript Design Patterns

Exploring the Design Patterns made famous by the Gang of Four (GoF).

## Gamma Categorization

### **Creational Patterns**
* They deal with the Creation (construction) of objects.
* The creation can be explicit (using a contructor) or implicit (using a dependency injection framework, reflection ...).
* The creation can be wholesale, where a single statement (like a construction call) is sufficient for the creation of the object, other times this might not be sufficient and we say the creation is piecewise (step-by-step).

* **Examples**
  + Builder
  + Factories:
    - Abstract Factory
    - Factory Method
  + Prototype
  + Singleton 

### **Structural Patterns**
  
* They are concerned with the structure of the classes that are involved, with the interfaces ...
* There are many patterns that are wrappers that mimic the underlying class' interface.
* They stress the importance of good API design and some of the patterns are about to make the interfaces as convenient to use as possible. 

* **Examples**
  + Adapter
  + Bridge
  + Composite
  + Decorator
  + Facade
  + Flyweight
  + Proxy

### **Behavioural Patterns**
* They don't follow any central theme, they are very diversified and we can say they have unique approaches and they solve their problems in very particular ways. 

* **Examples**
  + Chain of Responsibility
  + Command
  + Interpreter
  + Iterator
  + Mediator
  + Memento
  + Observer
  + State
  + Strategy
  + Template Method
  + Visitor
