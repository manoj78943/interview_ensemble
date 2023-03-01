## bubble sort 

def bubble_sort(a):
    swap = False
    for i in range(len(a)-1,0,-1):
        for j in range(i):
            if a[j] > a[j+1]:
                swap = True
                a[j],a[j+1] = a[j+1],a[j]
                
        if not swap:
            return a
    return a
        
a = [1,9,2,5,4,5,6,7,8]
r = bubble_sort(a)
print(r)